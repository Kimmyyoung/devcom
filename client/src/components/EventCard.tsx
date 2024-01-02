import React from 'react'
import Link from 'next/link';

// icons 
import { MdDateRange } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const EventCard = () => {
    const event_id = '12345';

    return (
      <Link href={`/dashboard/eventdetail/${event_id}`} replace>
        <div className="flex flex-row px-3 w-full items-center cursor-pointer hover:bg-slate-100">
                                <div className="px-4 py-4 text-sm font-medium whitespace-nowrap w-1/5">
                                        <h2 className="font-medium text-gray-800">Catalog</h2>
                                </div>
                                <div className="px-4 py-1 bg-gray-200 whitespace-nowrap inline text-sm font-normal rounded-full text-emerald-500 gap-x-2">
                                        Going
                                </div>
                                <div className="px-4 py-4 text-sm whitespace-nowrap w-3/5">
                                    <div>
                                      <h4 className="flex flex-row gap-2 text-gray-700 dark:text-gray-200">
                                        <MdDateRange />Jan, 12, 2024</h4>
                                      <p className="flex flex-row gap-2 text-gray-500 dark:text-gray-400">
                                      <IoLocationSharp />Vancouver City Hall, Vancouver, CA</p>
                                    </div>
                              </div>
                      
                                <div className="px-4 py-4 text-sm whitespace-nowrap flex items-center w-1/5">
                                        <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                        <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                        <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
                                        <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                        <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                </div>

                                <div className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                        <div className="bg-blue-500 w-2/3 h-1.5"></div>
                                    </div>
                                </div>
            </div>
            </Link>
  )
}

export default EventCard