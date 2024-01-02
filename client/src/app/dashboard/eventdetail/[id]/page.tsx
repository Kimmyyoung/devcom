"use client"
import React, { useState, useEffect} from 'react'
import { useParams, useRouter } from 'next/navigation'
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import Loading from '@/components/Loading';

const eventsURL = "http://localhost:8080/events/";

const page = () => {
  const { id } = useParams();
  const router = useRouter();
  const style = { marginTop: '3px' };
  const [ event, setEvent] = useState();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    try {
      const fetchEvent = async () => {
        const res = await axios.get(eventsURL + id);
        setEvent(res.data[0]);
        setLoading(true);
      }
      fetchEvent();
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (!loading) return <Loading />;

  console.log(event);

  return (
    <>
      {event && (
         <section className="flex flex-row px-2 mt-4 overflow-y-auto items-start font-pretendardRegular justify-around w-full pr-6 h-screen">
         <div className="flex flex-col w-3/4 gap-4 px-4 mr-8">
     
           <h3 
             className="flex flex-row gap-2 uppercase text-md font-bold text-navy cursor-pointer hover:text-lightnavy"
             onClick={() => router.back()}>
                 <FaArrowLeft style={style} /> All Events
               </h3>
   
             <h1 className="text-4xl font-bold">{event.eventName}</h1>
   
             <div className="flex flex-col mt-4 gap-4 rounded-lg">
               <h1 className="text-xl font-bold"></h1>
               <p className="pr-10 text-slate-500">{}</p>
             </div>
         </div>
   
           {/* card navigation */}
           <div className={`sticky top-0 flex flex-col font-montserrat items-center justify-center w-1/4 bg-slate-200 border-1 gap-4 rounded-lg`}>
           <div
           className="block max-w-[18rem] rounded-lg text-slate-700 text-center">
         <div className="p-6 flex flex-col gap-2">
           <h5
             className="mb-2 text-xl font-bold leading-tight uppercase">
             hello
           </h5>  
       </div>
     </div>
     </div>
   </section>
      )}
    
    </>
  )
}

export default page