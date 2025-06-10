"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { useSchool } from "@/store";
import toast from "react-hot-toast";
import apiClient from "@/lib/apiclient";
import { Timetable } from "@prisma/client";

const localizer = momentLocalizer(moment);

const ScheduleCalendar = ({
  classes,
  subjects,
  isStaff = false,
}: {
  classes: string[];
  subjects: string[];
  isStaff?: boolean;
}) => {
  const school = useSchool((state) => state.school);
  const [events, setEvents] = useState([]);
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleViewChange = (selectedView: View) => {
    setView(selectedView);
  };

  const handleSelectEvent = (event: {
    title: string;
    start: Date;
    end: Date;
  }) => {
    const baseUrl = "https://calendar.google.com/calendar/render";
    const eventDetails = {
      action: "TEMPLATE",
      text: event.title,
      dates: `${moment(event.start).utc().format("YYYYMMDDTHHmmSSZ")}/${moment(
        event.end
      )
        .utc()
        .format("YYYYMMDDTHHmmSSZ")}`,
      details: "Event details here", // Optional: Add event details
      location: "Event location", // Optional: Add event location
      sf: "true",
      output: "xml",
    };

    const params = new URLSearchParams(eventDetails);
    const googleCalendarUrl = `${baseUrl}?${params.toString()}`;

    window.open(googleCalendarUrl, "_blank");
  };

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await apiClient.post("/schedule", {
          subjects,
          classes,
          staff: isStaff,
        });
        const data = res.data.map((x: Timetable) => {
          return {
            start: createDateTime(x.day, convertTo24Hour(x.startTime)),
            end: createDateTime(x.day, convertTo24Hour(x.endTime)),
            title: `${x.subject} (${x.class})`,
          };
        });
        console.log(data);
        setEvents(data);
      } catch (error) {
        toast.error("An error occured while fetching schedule");
        console.log(error);
      }
    };
    fetchSchedule();
  }, [classes, subjects]);

  return (
    <div className="w-full h-full overflow-x-scroll">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", width: "100%", minWidth: "600px" }}
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={handleViewChange}
        onSelectEvent={handleSelectEvent}
        min={
          new Date(
            2025,
            1,
            1,
            parseInt(school.startHour.split(":")[0]),
            parseInt(school.startHour.split(":")[1])
          )
        }
        max={
          new Date(
            9999,
            1,
            1,
            parseInt(school.closeHour.split(":")[0]),
            parseInt(school.closeHour.split(":")[1])
          )
        }
      />
    </div>
  );
};

function createDateTime(day: string, time: string): Date | null {
  // Parse the time string
  const [hours, minutes] = time.split(":").map(Number);

  // Get the current date
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth();
  let dayOfMonth = now.getDate();

  const dayMap: { [key: string]: number } = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 0,
  };

  const targetDay = dayMap[day.toLowerCase()];

  if (targetDay === undefined) {
    console.error("Invalid day name");
    return null;
  }

  let currentDay = now.getDay();

  let diff = targetDay - currentDay;

  // if (diff > 0) {
  //   diff = diff - 7;
  // }

  const nextDate = new Date(now.setDate(now.getDate() + diff));

  year = nextDate.getFullYear();
  month = nextDate.getMonth();
  dayOfMonth = nextDate.getDate();

  // Create a new Date object
  const dateTime = new Date(year, month, dayOfMonth, hours, minutes, 0, 0);

  return dateTime;
}

function convertTo24Hour(time: string): string {
  const [timeString, modifier] = [
    time.slice(0, time.length - 2),
    time.slice(time.length - 2),
  ];

  let [hours, minutes] = timeString.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier.toUpperCase() === "PM") {
    hours = String(parseInt(hours, 10) + 12);
  }

  return `${hours}:${minutes}`;
}

export default ScheduleCalendar;
