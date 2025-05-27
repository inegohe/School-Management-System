"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { useSchool } from "@/store";

const localizer = momentLocalizer(moment);

const ScheduleCalendar = ({}) => {
  const school = useSchool(state => state.school);
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleViewChange = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className="w-full h-full overflow-x-scroll">
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", width: "100%", minWidth: "600px" }}
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={handleViewChange}
        min={new Date(2025, 1, 1, 8, 0)}
        max={new Date(9999, 1, 1, 15, 0)}
      />
    </div>
  );
};
export default ScheduleCalendar;
