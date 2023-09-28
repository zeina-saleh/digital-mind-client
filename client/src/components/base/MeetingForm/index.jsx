import React from 'react'
import { useState } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet'
import { sendRequest } from '../../../config/request'
import marker from '../../../assets/marker.svg'
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import './style.css'


const MeetingForm = ({ handleCloseMeetModal, ideaId }) => {

    const [data, setData] = useState({
        title: "",
        date: "",
        longitude: 35.519789109015015,
        latitude: 33.86100802163998,
    })
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [position, setPosition] = useState([data.latitude, data.longitude])

    const markerIcon = new L.Icon({
        iconUrl: marker, 
        iconSize: [35,45]
    })

    const handleLatLng = (lat, lng) => {
        setData({ ...data, latitude: lat, longitude: lng })
    }

    const handleMarkerEvent = (e) => {
        handleLatLng(e.target._latlng.lat, e.target._latlng.lng)
    }

    const createMeeting = async () => {
        const formData = {
            title: title,
            date: date,
            latitude: data.latitude,
            longitude: data.longitude
        };
        try{
            const response = await sendRequest({ method: 'POST', route: `/createMeeting/${ideaId}`, body: formData, });
                console.log(response);
                handleCloseMeetModal()
        } catch(error){
            console.log(error)
        }
      }

    return (
        <>
            <h6 className='self-center font-semibold'>Setup a meeting</h6>
            <Input label={'Add a title for your meeting'} onChange={(title)=>setTitle(title)} />
            <Input label={'Pick a date'} type={'datetime-local'} onChange={(date)=>setDate(date)} />

            <MapContainer center={position} zoom={13} scrollWheelZoom={false} onClick={(e)=> console.log(e)}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={markerIcon} draggable eventHandlers={{ dragend: handleMarkerEvent }}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

            <div className='flex justify-center gap-5 w-full'>
                <Button classname={"w-20 h-8 self-center"} text={'Submit'} onClick={createMeeting} />
                <Button classname={"w-20 h-8"} text={'Cancel'} onClick={handleCloseMeetModal} />
            </div>
        </>
    )
}

export default MeetingForm