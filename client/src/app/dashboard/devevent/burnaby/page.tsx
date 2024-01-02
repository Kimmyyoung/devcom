
import React from 'react';
import PopularJobCard from "@/components/PopularJobCard";
import JobCard from "@/components/JobCard";
import { MdLocationOn } from "react-icons/md";

const Page: React.FC = () => {
  return (
    <div className="w-full p-6 flex flex-col gap-2 bg-gray-50 overflow-y-auto">


      <div className="mb-10">
        <div className="text-3xl font-bold text-orange sm:text-4xl">Developer Event</div>
        <div className="flex flex-row mt-2 items-center gap-2">
          <MdLocationOn color="gray"/>
          <h1 className="flex-auto text-base text-slate-500">Vancouver, BC, CA</h1>
        </div>
      </div>   
      
      <h1 className="text-xl font-bold">Popular Jobs</h1>
      {/* job card  */}
      <div className="flex flex-row items-center gap-2 mb-5">
        <PopularJobCard />
        <PopularJobCard />
        <PopularJobCard />
        <PopularJobCard />
        <PopularJobCard />
      </div>
      
      {/* job lists  */}
      <h1 className="text-xl font-bold">Job Lists</h1>

      <div className="flex flex-col gap-2">
        <JobCard
              logo="https://www.tailorbrands.com/wp-content/uploads/2020/07/natura-logo--300x300.jpg"
              name="DeHaat"
              location="Gurgaon, Haryana"
              assignment="1 Assignment"
              openings="Openings yet to be updated"
        />
        <JobCard
              logo="https://www.tailorbrands.com/wp-content/uploads/2020/07/natura-logo--300x300.jpg"
              name="DeHaat"
              location="Gurgaon, Haryana"
              assignment="1 Assignment"
              openings="Openings yet to be updated"
        />
        <JobCard
              logo="https://www.tailorbrands.com/wp-content/uploads/2020/07/natura-logo--300x300.jpg"
              name="DeHaat"
              location="Gurgaon, Haryana"
              assignment="1 Assignment"
              openings="Openings yet to be updated"
        />
        <JobCard
              logo="https://www.tailorbrands.com/wp-content/uploads/2020/07/natura-logo--300x300.jpg"
              name="DeHaat"
              location="Gurgaon, Haryana"
              assignment="1 Assignment"
              openings="Openings yet to be updated"
        />
        <JobCard
              logo="https://www.tailorbrands.com/wp-content/uploads/2020/07/natura-logo--300x300.jpg"
              name="DeHaat"
              location="Gurgaon, Haryana"
              assignment="1 Assignment"
              openings="Openings yet to be updated"
        />
        <JobCard
              logo="https://www.tailorbrands.com/wp-content/uploads/2020/07/natura-logo--300x300.jpg"
              name="DeHaat"
              location="Gurgaon, Haryana"
              assignment="1 Assignment"
              openings="Openings yet to be updated"
            />
      </div>

    </div>
  );
};

export default Page;
