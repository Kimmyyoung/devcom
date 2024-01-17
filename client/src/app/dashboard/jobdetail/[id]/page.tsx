
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import JobBoard from '@/components/JobBoard';
import useJobFetch from '@/hook/useJobFetch';
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from 'next/navigation';

interface JobDetailProps {
  // id: string;
}

interface JobType {
  job_id: string;
}

const JobDetail: React.FC<JobDetailProps> = () => {
  const style = { marginTop: '3px' };
  const { id } = useParams<{ id: string }>();
  const decodedId = decodeURIComponent(id);
  const router = useRouter();
  const {data, loading, error} = useJobFetch('search', {
    query: 'software',
    num_pages: 1
  });

  if (loading && data) return <div>Loading...</div>;

  let detailedData = data ? data.find((item : JobType) => item.job_id === decodedId) : null;
  console.log(detailedData);
  let { employer_name, job_title, job_country, job_description, job_highlights } = detailedData ? detailedData : { employer_name: '', job_title: '', job_country: '', job_description: '', job_highlights: '' };
  
  return (
    <>
      <section className="flex flex-row px-2 pt-4 overflow-y-auto items-start font-pretendardRegular justify-around w-full pr-6 h-screen dark:bg-slate-800 dark:text-white">

        {/* job detail section */}
        <div className="flex flex-col w-3/4 gap-4 px-4 mr-8">
          
        <h3 
          className="flex flex-row gap-2 uppercase text-md font-bold text-navy cursor-pointer hover:text-lightnavy"
          onClick={() => router.back()}>
              <FaArrowLeft style={style} /> All Jobs
            </h3>

          <h1 className="text-4xl font-bold">{job_title}</h1>

          <div className="flex flex-col mt-4 gap-4 rounded-lg">
            <h1 className="text-xl font-bold">The role</h1>
            <p className="pr-10 text-slate-500">{job_description}</p>
          </div>

          <div className="flex flex-col mt-4 gap-4 rounded-lg">
            <h1 className="text-xl font-bold">Qualifications</h1>
            <ul className="list-inside pr-10 text-slate-500">
              {job_highlights.Qualifications? job_highlights.Qualifications.map((item : string) => (
                <>
                  <li className="list-disc">{item}</li>
                </>
              )) : null}
            </ul>
          </div>

          
          <div className="flex flex-col mt-4 gap-4 rounded-lg">
            <h1 className="text-xl font-bold">Things you might do</h1>
            <ul className="list-inside pr-10 text-slate-500">
              {job_highlights.Responsibilities? job_highlights.Responsibilities.map((item : string) => (
                <>
                  <li className="list-disc">{item}</li>
                </>
              )) : null}
            </ul>
          </div>
        </div>

        {/* card navigation */}
        <JobBoard data={detailedData} />
      </section>
    </>
  );
};

export default JobDetail;