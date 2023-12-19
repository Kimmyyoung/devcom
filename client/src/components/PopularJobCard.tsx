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
  const { employer_logo, employer_name, job_title, job_country, job_id} = data;

  return (
    <Link href={`/dashboard/jobdetail/${job_id}`} replace>
      <div className="rounded-lg w-60 h-60 bg-navy p-6 hover:bg-lightnavy shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] cursor-pointer font-pretendardRegular">
        
    <div className="block mb-4 w-10 h-10 rounded-full overflow-hidden bg-white items-center align-center">
        <img
          src={employer_logo ? employer_logo : "https://i.ibb.co/7tz1Yq1/joblogo.jpg"}
          alt='Logo'
          className="items-center mt-auto object-cover"
        />
    </div>

      <div className="flex flex-row items-center gap-2 mt-2">
        <MdOutlineWork color="white"/>
        <p className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{employer_name}</p>
      </div>

      <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200 mt-4">
        <p>{job_title}</p>
        <p>{job_country}</p>
      </div>
      </div>
      </Link>
  );
};

export default PopularJobCard