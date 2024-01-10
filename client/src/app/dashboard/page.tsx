'use client'
import { useEffect, useState } from 'react';
import useJobFetch from '@/hook/useJobFetch';
import PopularJobCard from "@/components/PopularJobCard";
import JobCard from "@/components/JobCard";
import Loading from '@/components/Loading';
import useUserFetch from '@/hook/useUserFetch';

interface JobItem {
  id: string;
  employer_logo: string;
  job_id: string;
  employer_name: string;
  job_title: string;
  job_country: string;
  job_city: string;
  job_apply_link: string;
  job_salary_currency: string;
}

const Home = () => {
  const { data, loading, error } = useJobFetch('search', {
    query: 'software',
    num_pages: 1
  });
  const { user } = useUserFetch();

  if(loading) return <Loading />;
  if(error) return <div>Error!</div>;
 
  return (
    <div className="w-full p-6 flex flex-col gap-2 overflow-y-auto font-pretendardRegular dark:bg-slate-800">
      <div className="mb-10">
        <div className="text-3xl font-bold text-orange sm:text-4xl dark:text-white">Welcome back <span className="text-blue-500">{user?.username}</span>!</div>
        <h1 className="flex-auto pt-3 text-base text-slate-500 dark:text-slate-100">Check out your top matches and saved jobs down below!</h1>
        </div>
      
      <h1 className="text-xl font-bold text-blue-950 xl:flex lg:flex md:hidden sm:hidden dark:text-white">Popular Jobs</h1>
      <div className="flex flex-row items-center w-full gap-5 mb-5 xl:flex lg:flex md:hidden sm:hidden">
        {data?.slice(0, 4).map((item : JobItem) => (
          <PopularJobCard key={item.id} data={item} />
        ))}
      </div>
      
      <h1 className="text-xl font-bold text-blue-950 dark:text-white">Job Lists</h1>

      <div className="flex flex-col gap-4">
        {data?.map((item: JobItem) => (
          <JobCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}


export default Home;  