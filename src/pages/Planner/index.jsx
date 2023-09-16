import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import './style.css'

const Planner = () => {
  return (
    <div className='flex justify-center w-full h-screen'>
      <div className='w-10/12'>
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGrid"
          weekends={true}
          events={''}
          eventBackgroundColor='#78FFCC'
        />
      </div>
    </div>
  )
}

export default Planner