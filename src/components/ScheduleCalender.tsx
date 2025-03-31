"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const ScheduleCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleViewChange = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        events={mockEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={handleViewChange}
        min={new Date(2025, 1, 1, 8, 0)}
        max={new Date(2025, 1, 1, 15, 0)}
      />
    </div>
  );
};

const mockEvents = [
  {
    id: 1,
    title: "Math Class",
    start: new Date(2025, 2, 31, 8, 0),
    end: new Date(2025, 2, 31, 8, 45),
  },
  {
    id: 2,
    title: "English Class",
    start: new Date(2025, 2, 31, 9, 0),
    end: new Date(2025, 2, 31, 9, 45),
  },
  {
    id: 3,
    title: "Science Workshop",
    start: new Date(2025, 2, 31, 10, 0),
    end: new Date(2025, 2, 31, 10, 45),
  },
  {
    id: 4,
    title: "History Lecture",
    start: new Date(2025, 2, 31, 11, 0),
    end: new Date(2025, 2, 31, 11, 45),
  },
  {
    id: 5,
    title: "Art Class",
    start: new Date(2025, 2, 31, 12, 0),
    end: new Date(2025, 2, 31, 12, 45),
  },
  {
    id: 6,
    title: "Physical Education",
    start: new Date(2025, 2, 31, 13, 0),
    end: new Date(2025, 2, 31, 13, 45),
  },
  {
    id: 7,
    title: "Music Class",
    start: new Date(2025, 2, 31, 14, 0),
    end: new Date(2025, 2, 31, 14, 45),
  },
];

export default ScheduleCalendar;
