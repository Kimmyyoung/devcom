"use client"
import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import { DateSelectArg, EventApi, formatDate } from '@fullcalendar/core'

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { EventClickArg } from '@fullcalendar/core';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  
  const handleDateClick = (info: DateSelectArg) => {
    const title = prompt("Please enter interview schedule");
  
    const calendarApi = info.view.calendar;
    calendarApi.unselect();
  
    if(title) {
      calendarApi.addEvent({
        id: `${info.startStr}-${title}`,
        title,
        start: info.startStr,
        allDay: info.allDay
      })
    };
  };

  const handleEventClick = (info: EventClickArg) => {
    if(window.confirm(`Are you sure you want to delete the event? '${info.event.title}'`)) {
      info.event.remove();
    } 
  }

  return (
      <div className="px-6 py-4 w-full font-pretendardRegular">

      {/* Calendar Sidebar (Event) */}
      <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-5 bg-navy text-white rounded-lg p-4">
            <h3 className="text-orange text-xl uppercase">Events</h3>
            <ul>
            {currentEvents.map((e) => (
                <li key={e.id} className="mb-4 rounded-md">
                  <p className="text-lg text-white">{e.title}</p>
                  <p className="text-lightgray">
                    {e.start ? formatDate(e.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }) : 'No start date'}
                  </p>
                </li>
            ))}
            </ul>
          </div>

        
        {/* Calendar */}
        <div style={{ width: '100%', height: '800px' }}>
          <FullCalendar 
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  listPlugin
                ]}
                headerToolbar={{
                  left: "prev,next",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                }}
                //calendar header (filter) : make sure no space
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={handleDateClick}
                eventClick={handleEventClick}
                eventsSet={(events) => {setCurrentEvents(events)}}
                initialEvents={[
                  {id: '1234', title: "BrainStation Interview", date: "2023-09-14" },
                  {id: '4321', title: "VancouveCom Interview", date: "2023-09-24" },
                ]}
        />
        </div>
      </div>
    </div>
  )
}

export default page;