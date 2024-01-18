"use client"
import React, { useState, useEffect} from 'react'
import { useParams, useRouter } from 'next/navigation'
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import Loading from '@/components/Loading';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import MemberCard from '@/components/MemberCard';
import useUserFetch from '@/hook/useUserFetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatModal from '@/components/ChatModal';
import socketIO from 'socket.io-client';
import { connect } from 'socket.io-client';
const socket = connect('https://devcom-0cbe786b171a.herokuapp.com/');

const eventsURL = "https://devcom-0cbe786b171a.herokuapp.com//events/";

interface Event {
  id: number
  eventName: string,
  eventDescription: string,
  eventLocationId: number,
  eventLocation: string,
  eventLocationDetail: string,
  eventDateTime: string,
  eventTime: string,
  eventImage: string,
  eventParticipants: number
}

interface Attendee {
  id: number, 
  email: string,
  username: string,
}

const page = () => {
  const { id } = useParams();
  const router = useRouter();
  const style = { marginTop: '3px' };
  const [ event, setEvent] = useState<Event | undefined>();
  const [loading, setLoading] = useState(false);
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const { user } = useUserFetch();

  const [disabled, setDisabled] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  useEffect(() => {
    try {
      const fetchEvent = async () => {
        const res = await axios.get(eventsURL + id);
        setEvent(res.data[0]);
        setAttendees(res.data[0].eventAttendees);
        setLoading(true);
         if(attendees.some((attendee) => attendee.id === user?.id)) setDisabled(true);
      }
      fetchEvent();
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchAttendee = async () => {
        const res = await axios.get(eventsURL + id);
        setAttendees(res.data[0].eventAttendees);
        // if (attendees.some((attendee) => attendee.id === user?.id)) setDisabled(true);
      }
      fetchAttendee();
    } catch (err) {
      console.error(err);
    }
  }, [attendees]);

  if (!loading) return <Loading />;
  
  const joinEvent = async () => {
    try {
      if(!user) {
        console.log("Please login first");
      }
      const res = await axios.post(eventsURL + id + "/attendees", {
        user_id: user?.id,
        email: user?.email,
        username: user?.username
      });

      setDisabled(true);
      // setAttendees([...attendees, res.data]);

      toast.success('🦄 Successfully joined the event!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    } catch (err) {
      console.error(err);
    }
  }

  const handleChatButtonClick = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };


  const handleChatModalClose = () => {
    setIsChatModalOpen(false);
  }


  return (
    <>
      {event && (
         <section className="flex flex-row px-2 pt-4 overflow-y-auto items-start font-pretendardRegular justify-around w-full pr-6 h-screen dark:bg-slate-800">
         
          <div className="flex flex-col w-3/4 gap-4 px-4 mr-8">
         <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
           <h3 
             className="flex flex-row gap-2 uppercase text-md font-bold text-navy cursor-pointer hover:text-lightnavy dark:text-slate-400"
             onClick={() => router.back()}>
                 <FaArrowLeft style={style} /> All Events
               </h3>

            <img className="object-cover w-full h-96 rounded-lg" src="https://i.ibb.co/BrXvpNb/developer.jpg" alt="event cover"/>
             
             <h1 className="text-4xl font-bold dark:text-white">{event.eventName}</h1>
   
            <div className="flex flex-row gap-4 rounded-lg items-center">
              <FaLocationDot color="gray" />
              <h1 className="text-lg font-normal dark:text-white">{event.eventLocationDetail}</h1>
            </div>

            <div className="flex flex-row mt-0 gap-4 rounded-lg items-center">
              <IoIosTime color="gray" />
              <h1 className="text-lg font-normal dark:text-white">{event.eventDateTime}</h1>
            </div>

            <p className="pr-10 text-slate-500 dark:text-slate-300">{event.eventDescription}</p>

            <button className="join-button group relative h-12 w-48 overflow-hidden rounded bg-blue-500 text-lg font-bold text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={joinEvent} disabled={disabled}>
              {disabled ? "Joined" : "I would like to join!"}
              <div className="absolute inset-0 h-full w-full scale-0 rounded transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
          {isChatModalOpen && <ChatModal user={user?.username} socket={socket} onClose={handleChatModalClose} />}

   
           {/* card navigation */}
          <div className={`sticky top-0 flex flex-col font-montserrat items-center justify-center w-1/4 bg-slate-50 border-1 gap-4 rounded-lg dark:bg-slate-500`}>
           <div
           className="block max-w-[18rem] rounded-lg text-slate-500 dark:text-white">
              <div className="p-6 flex flex-col gap-2">
                <h5
                  className="mb-2 text-lg font-bold leading-tight uppercase text-center lg:text-lg md:text-sm sm:text-xs xs:text-xs">
                  Event Participants
                </h5>  
                <div className="flow-root">
                  <ul role="list" className="">
                    {attendees.map((eventAttendee) => (
                      <MemberCard
                        key={eventAttendee.id}
                        props={eventAttendee}
                        isChatModalOpen={isChatModalOpen}
                        onChatButtonClick={handleChatButtonClick}
                      />
                    ))}
                  </ul>
                </div>
       </div>
     </div>
          </div>
   </section>
      )}
    </>
  )
}

export default page