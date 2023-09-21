import React from 'react'
import { useEffect, useState } from 'react';
import { sendRequest } from '../../config/request'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
import './style.css'

const Planner = () => {

  const [events, setEvents] = useState([]);

  const fetchPlans = async () => {
    try {
      const response = await sendRequest({ route: "/getDate", body: "" });
      console.log(response);
      const schedule = response.schedule;
      setEvents(schedule);
      console.log(events)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className='flex justify-center w-full h-screen'>
      <div className='w-10/12'>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={events}
          eventBackgroundColor='#78FFCC'
        />
      </div>
    </div>
  )
}

export default Planner