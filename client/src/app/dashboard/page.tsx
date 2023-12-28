'use client'
import type { ReactElement } from 'react'

// hooks
import useJobFetch from '@/hook/useJobFetch';

// components
import PopularJobCard from "@/components/PopularJobCard";
import JobCard from "@/components/JobCard";
import Loading from '@/components/Loading';

const Home = () => {
  const { data, loading, error} = useJobFetch('search',{
    query: 'software',
    num_pages: 1
  });

  if(loading) return <Loading />;
  if(error) return <div>Error!</div>;
 
  return (
    <div className="w-full p-6 flex flex-col gap-2 overflow-y-auto font-pretendardRegular">
      <div className="mb-10">
        <div className="text-3xl font-bold text-orange sm:text-4xl">Welcome back Kimmy!</div>
        <h1 className="flex-auto pt-3 text-base text-slate-500">Check out your top matches and saved jobs down below!</h1>
        </div>
      
      <h1 className="text-xl font-bold text-blue-950 xl:flex lg:flex md:hidden sm:hidden">Popular Jobs</h1>
      {/* job card  */}
      <div className="flex flex-row items-center gap-5 mb-5 xl:flex lg:flex md:hidden sm:hidden">
        {data.slice(0,4).map((item) => (
          <PopularJobCard key={item.id} data={item} />
        ))}
      </div>
      
      {/* job lists  */}
      <h1 className="text-xl font-bold text-blue-950">Job Lists</h1>

      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <JobCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}


export default Home;  