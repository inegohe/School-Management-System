"use client";
import apiClient from "@/lib/apiclient";
import { useRecents } from "@/store";
import { Event as EventType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Event = () => {
  const { recents, setRecents } = useRecents();
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await apiClient.get("/events?page=1&order=desc&limit=4");
        if (res.status === 200) {
          setEvents(res.data.events);
          setRecents({
            events: res.data.events.filter(
              (x: EventType) =>
                new Date(x.date).toDateString() ===
                new Date(Date.now()).toDateString()
            ).length,
            announcements: recents.announcements,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchEvents();
  }, []);
  return (
    <div className="flex flex-col gap-4 p-2 w-full">
      <div className="w-full justify-between flex items-center">
        <h1 className="font-bold text-lg">Events</h1>
        <Link className="text-sm text-gray-400" href="/list/events">
          View all
        </Link>
      </div>
      {!events.length && (
        <p className="font-bold text-gray-400 text-lg">No Events</p>
      )}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-2 w-full">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex-1 min-w-[200px] p-3 lg:p-5 rounded-md border-2 border-t-4 border-secondary-light h-fit bg-primary gap-2 odd:border-t-sky even:border-t-purple"
          >
            <div className="w-full justify-between flex items-center">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <p className="text-sm text-gray-400">{`${event.startTime} - ${event.endTime}`}</p>
            </div>
            <p className="text-gray-500">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
