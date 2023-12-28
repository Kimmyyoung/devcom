import React from 'react'

// font
import { Montserrat } from "next/font/google";

//  react-icons
import { MdWork } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});

const JobBoard = ({ data }) => {
  const styles = { marginLeft: '10px' };
  let { employer_name, job_title, job_country, job_city, job_apply_link, job_salary_currency } = data ? data : { employer_name: '', job_title: '', job_city: '' ,job_country: '', job_apply_link: '', job_salary_currency: '' };

  return (
    <div className={`${montserrat.className} sticky top-0 flex flex-col font-montserrat items-center justify-center w-1/4 bg-slate-200 border-1 gap-4 rounded-lg`}>
    
      <div
      className="block max-w-[18rem] rounded-lg text-slate-700 text-center">
      
        <div className="p-6 flex flex-col gap-2">
          <img className="rounded-full w-20 h-20 m-auto my-2" src='https://i.ibb.co/7tz1Yq1/joblogo.jpg' alt='Logo' />
          <h5
            className="mb-2 text-xl font-bold leading-tight uppercase">
            {employer_name}
          </h5>
          <div className="flex flex-row gap-2">
            <MdWork />
            <p className="text-sm text-left font-medium">{job_title}</p>
          </div>
          <div className="flex flex-row align-center gap-2">
            <IoLocation />
            <p className="text-sm font-medium">{job_city} | {job_country}</p>
          </div>
          <div className="flex flex-row align-center gap-2">
            <MdAttachMoney />
            <p className="text-sm font-medium">{job_salary_currency ? job_salary_currency : "N/A"}</p>
          </div>

        <button
            type="button"
            className="inline-flex items-center text-white bg-justify-center w-full h-12 px-6 mb-1 font-medium tracking-wide transition duration-200 rounded bg-blue-950 p-6 hover:bg-blue-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  focus:shadow-outline focus:outline-none cursor-pointer"
            data-te-ripple-init
            data-te-ripple-color="light" onClick={()=> window.location.href = job_apply_link}>
            Apply Now
            <FaArrowRight style={styles} />
          </button>
          
      </div>
    </div>
    
    </div>
  )
}

export default JobBoard