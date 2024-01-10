
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import JobBoard from '@/components/JobBoard';
import useJobFetch from '@/hook/useJobFetch';
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from 'next/navigation';

interface JobData {
  id: string;
  employer_logo: string;
  job_id: string;
  employer_name: string;
  job_title: string;
  job_country: string;
  job_description: string;
  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
  };
  job_city: string;
  job_apply_link: string;
  job_salary_currency: string;
};




const JobDetail = () => {
  const style = { marginTop: '3px' };
  const { id } = useParams<{ id: string }>(); 
  const decodedId = decodeURIComponent(id);
  const router = useRouter();
  const {data, loading, error} = useJobFetch('job-details', {
    job_id: id,
    extended_publisher_details: 'false'
  });

  if (loading && data) return <div>Loading...</div>;

  let detailedData: JobData | null = (data as unknown as JobData[]).find((item: JobData) => item.job_id === decodedId) || null;
  
  let { employer_name, job_title, job_country, job_description, job_highlights } = detailedData ? detailedData : { employer_name: '', job_title: '', job_country: '', job_description: '', job_highlights: '' };
  
  return (
    <>
      <section className="flex flex-row px-2 pt-4 overflow-y-auto items-start font-pretendardRegular justify-around w-full pr-6 h-screen dark:bg-slate-800">
        <div className="flex flex-col w-3/4 gap-4 px-4 mr-8">
        <h3 
          className="flex flex-row gap-2 uppercase text-md font-bold text-navy cursor-pointer hover:text-lightnavy dark:text-slate-400"
          onClick={() => router.back()}>
              <FaArrowLeft style={style} /> All Jobs
            </h3>

          <h1 className="text-4xl font-bold dark:text-white">{job_title}</h1>

          <div className="flex flex-col mt-4 gap-4 rounded-lg">
            <h1 className="text-xl font-bold dark:text-white">The role</h1>
            <p className="pr-10 text-slate-500 dark:text-slate-300">{job_description}</p>
          </div>

          <div className="flex flex-col mt-4 gap-4 rounded-lg">
            <h1 className="text-xl font-bold dark:text-white">Qualifications</h1>
            <ul className="list-inside pr-10 text-slate-500 dark:text-slate-300">
            {typeof job_highlights !== 'string' && job_highlights.Qualifications ? job_highlights.Qualifications.map((item) => (
              <>
                <li className="list-disc">{item}</li>
              </>
            )) : null}
            </ul>
          </div>

          
          <div className="flex flex-col mt-4 gap-4 rounded-lg">
            <h1 className="text-xl font-bold dark:text-white">Things you might do</h1>
            <ul className="list-inside pr-10 text-slate-500 dark:text-slate-300">
            {typeof job_highlights !== 'string' && job_highlights.Responsibilities ? job_highlights.Responsibilities.map((item) => (
              <>
                <li className="list-disc">{item}</li>
              </>
            )) : null}
            </ul>
          </div>
        </div>
        <JobBoard data={detailedData} />
      </section>
    </>
  );
};

export default JobDetail;
