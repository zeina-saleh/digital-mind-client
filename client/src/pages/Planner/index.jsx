import React from 'react'
import { useEffect, useState } from 'react';
import { sendRequest } from '../../config/request'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet'
import marker from '../../assets/marker.svg'
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import './style.css'

const Planner = () => {

  const [events, setEvents] = useState([]);
  const [position, setPosition] = useState([])

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const markerIcon = new L.Icon({
    iconUrl: marker, 
    iconSize: [35,45]
})

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

  function handleEventClick(e) {
    console.log(e.event._def.extendedProps);
    const event_props = e.event._def.extendedProps;
    setPosition([event_props.latitude, event_props.longitude])
    handleOpenModal()
  }

  return (
    <>
      <div className='flex justify-center w-full h-screen'>
        <div className='w-10/12'>
          <FullCalendar
            className="calendar"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={events}
            eventBackgroundColor='#78FFCC'
            headerToolbar={{
              start: "today prev next",
              center: 'title',
              end: "dayGridDay timeGridWeek dayGridMonth"
            }}
            height={"90vh"}
            eventClick={(event) => handleEventClick(event)}
          />
        </div>
      </div>

      <Modal  overlayClassName='overlay' isOpen={openModal} onRequestClose={handleCloseModal} className={'modal w-10/12 h-4/5 flex flex-col gap-5 py-8 px-9 active:border-0 bg-white'}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={markerIcon} >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Modal>
    </>
  )
}

export default Planner