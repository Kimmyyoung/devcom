
import React from 'react';

// components
import EventCard from "@/components/EventCard";

import { MdLocationOn } from "react-icons/md";

const Page: React.FC = () => {
  return (
    <>
    <div className="p-6 flex w-100 flex-col gap-2 overflow-y-auto overflow-x-hidden">
      <div className="mb-10">
        <div className="text-3xl font-bold text-orange sm:text-4xl">Developer Event</div>
        <div className="flex flex-row mt-2 items-center gap-2">
          <MdLocationOn color="gray"/>
          <h1 className="flex-auto text-base text-slate-500">Vancouver, BC, CA</h1>
        </div>
      </div>   
      
        <div className="flex px-6 py-2 w-full align-middle sm:-mx-6 lg:-mx-8">
          <div className="">
              <div className="flex flex-row w-100 justify-between py-2 px-4 bg-slate-500 text-white">
                <p>Event</p>
                <p>Status</p>
                <p>About</p>
                <p>Participants</p>
                <p>Participate</p>
              </div>
            
              <div className="flex flex-col bg-white">
                            <EventCard />
                            <EventCard />
                            <EventCard />
                            <EventCard />
              </div>                          
          </div>
        </div>
            
        </div>
    </>
  );
};

export default Page;
