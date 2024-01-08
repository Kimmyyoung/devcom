import React from 'react'
import { MdOutlineWork } from "react-icons/md";
import Link from 'next/link';

interface JobItem {
  employer_logo: string;
  employer_name: string;
  job_title: string;
  job_country: string;
}

interface PopularJobCardProps {
}

const PopularJobCard: React.FC<PopularJobCardProps> = ({data}) => {
  const { employer_logo, employer_name, job_title, job_city,job_country, job_id} = data;

  return (
    <Link href={`/dashboard/jobdetail/${job_id}`} replace>
      <div className="rounded-lg w-60 h-50 bg-blue-950 text-white p-6 hover:bg-blue-900 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] cursor-pointer font-pretendardRegular dark:bg-slate-700">
        
    <div className="block mb-4 w-10 h-10 rounded overflow-hidden bg-white items-center align-center">
        <img
          src={employer_logo ? employer_logo : "https://i.ibb.co/7tz1Yq1/joblogo.jpg"}
          alt='Logo'
          className="items-center border-sky-100 mt-auto object-cover"
        />
    </div>

        <div>
          <h3 className="line-clamp-1 w-full text-md font-semibold">{job_title}
          </h3>
          <div className="mt-2 flex flex-col">
            <h4 className="cursor-pointer truncate h-8 text-sm">
              {employer_name}
            </h4>
            {/* <div className="mx-1 text-xs" data-testid="bullet">•</div> */}
            <p className="truncate text-xs"> {job_city}, {job_country} + 3 more </p>
          </div>
        
        </div>
        
      {/* <div className="flex flex-row h-10 items-center gap-2 mt-2">
        <p className="text-lg font-medium leading-tight text-white dark:text-neutral-50">{employer_name}</p>
      </div>

      <div className="mb-4 text-base text-neutral-100 dark:text-neutral-200 mt-4">
          <p className="text-sm h-10">{job_title}</p>
          <p className="text-sm">{job_city}, {job_country}</p>
      </div> */}
      </div>
      </Link>
  );
};

export default PopularJobCard