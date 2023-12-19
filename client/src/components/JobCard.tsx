import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";

interface JobCardProps {
  data: {
    job_title: string;
    employer_name: string;
    employer_logo: string;
    job_country: string;
  }
}

const JobCard = ({ data }: JobCardProps) => {
  let { job_title, employer_name, employer_logo, job_country } = data;

  return (
    <div className="flex flex-row gap-10 font-pretendardRegular rounded-lg bg-green-300 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:text-orange cursor-pointer">
      <div className="mb-2 flex flex-row items-center gap-10">
        <img className="rounded-full w-10 h-10" src={employer_logo ? employer_logo : 'https://i.ibb.co/7tz1Yq1/joblogo.jpg'} alt='Logo' />
      </div>

      <div className="flex flex-col">
        <div className="text-lg">{job_title}</div>
        <div className="flex flex-row items-center gap-2">
              <MdOutlineWork />
              <p>{employer_name}</p>
              <FaLocationDot />  
              <p>{job_country}</p>
        </div>
      </div>

    </div>
  )
}

export default JobCard;