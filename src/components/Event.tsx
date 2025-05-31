"use client";
import apiClient from "@/lib/apiclient";
import { useRecents } from "@/store";
import { Event as EventType } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Event = () => {
  const {recents, setRecents} = useRecents();
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await apiClient.get("/events");
        if (res.status === 200) {
          setEvents(res.data.events);
          setRecents({
            events: res.data.events.filter(
              (x: EventType) => new Date(x.date).getDay() === new Date(Date.now()).getDay()
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
    <div className="flex flex-col gap-4 p-2">
      <div className="w-full justify-between flex items-center">
        <h1 className="font-bold text-lg">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      {!events.length && (
        <p className="font-bold text-gray-400 text-lg">No Events</p>
      )}
      {events.map((event, index) => (
        <div
          key={index}
          className="w-full p-3 lg:p-5 rounded-md border-2 border-t-4 border-secondary-light h-fit bg-primary gap-2 odd:border-t-sky even:border-t-purple"
        >
          <div className="w-full justify-between flex items-center">
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p className="text-sm text-gray-400">{`${event.startTime} - ${event.endTime}`}</p>
          </div>
          <p className="text-gray-500">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Event;
