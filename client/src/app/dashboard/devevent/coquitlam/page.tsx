
"use client"
import React, {useState, useEffect} from 'react';
import EventCard from "@/components/EventCard";
import axios from 'axios';
import { MdLocationOn } from "react-icons/md";

const eventsURL = "https://devcom-0cbe786b171a.herokuapp.com/events";

interface eventProps {
  id: number;
  eventTitle: string;
  eventDate: string;
  eventLocationId: number;
  eventDescription: string;
  eventParticipants: number;
  eventStatus: string;
  eventImage: string;
}

const Page: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const fetchEvents = async () => {
        const res = await axios.get(eventsURL);

        res.data = res.data.filter((event: eventProps) => event.eventLocationId === 3);

        setEvents(res.data);
        setLoading(true);
      };
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  }, []);
  

  
  return (
    <>
    <div className="p-6 flex w-100 h-full flex-col gap-2 overflow-y-auto overflow-x-hidden dark:bg-slate-800 ">
      <div className="mb-10">
        <div className="text-3xl font-bold text-orange sm:text-4xl dark:text-white">Developer Event</div>
        <div className="flex flex-row mt-2 items-center gap-2">
          <MdLocationOn color="gray"/>
          <h1 className="flex-auto text-base text-slate-500 dark:text-slate-300">Coquitlam, BC, CA</h1>
        </div>
      </div>   
      
        <div className="flex px-6 py-2 w-full align-middle sm:-mx-6 lg:-mx-8">
          <div className="fill-available flex flex-row lg:flex-col md:flex-col">
              <div className="flex flex-col w-1/2 lg:w-full md:w-full lg:flex-row md:flex-row justify-between py-2 px-4 bg-slate-500 text-white">
                <p>Event</p>
                <p>Status</p>
                <p>About</p>
                <p>Participants</p>
                <p>Participate</p>
              </div>
            
              <div className="flex flex-col bg-white">
              {events && events.map((event) => (
                <EventCard props={event} />
              ))}
              </div>                          
          </div>
        </div>
            
        </div>
    </>
  );
};

export default Page;

