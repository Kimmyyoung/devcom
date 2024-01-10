import Link from "next/link";
import useDarkMode from "@/hook/useDarkMode";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { IconContext } from "react-icons";

interface JobCardProps {
  data: {
    job_id: string;
    job_title: string;
    employer_name: string;
    employer_logo: string;
    job_country: string;
  }
}

const JobCard = ({ data }: JobCardProps) => {
  let { job_title, employer_name, employer_logo, job_country, job_id } = data;
  const [colorTheme, setTheme, isDarkMode] = useDarkMode();

  return (
    <Link href={`/dashboard/jobdetail/${job_id}`} replace>
    <div className="flex flex-row gap-10 font-pretendardRegular rounded-lg bg-gray-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:bg-gray-300 cursor-pointer dark:bg-slate-600">
      <div className="mb-2 flex flex-row items-center gap-10">
        <img className="rounded-full w-10 h-10" src={employer_logo ? employer_logo : 'https://i.ibb.co/7tz1Yq1/joblogo.jpg'} alt='Logo' />
      </div>

      <div className="flex flex-col gap-3">
        <div className="text-lg dark:text-white">{job_title}</div>
        <div className="flex flex-row items-center gap-2">
            <IconContext.Provider value={{
              color: isDarkMode ? '#ffffff' : '#172554',
              className: "react-icons",
              size: "1em"
            }}>    
            <MdOutlineWork />
          </IconContext.Provider>
          <p className="text-blue-950 text-xs dark:text-slate-400">{employer_name}</p>
          <IconContext.Provider value={{ color: "#172554", className: "react-icons", size: "1em" }}>    
            <FaLocationDot />  
          </IconContext.Provider>
              <p className="text-blue-950 text-xs dark:text-slate-400">{job_country}</p>
        </div>
      </div>

      </div>
      </Link>
  )
}

export default JobCard;