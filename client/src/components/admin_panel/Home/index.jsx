import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwatchbook, faComments, faFolderTree } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { nodeRequest } from '../../../config/nodeRequest';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { BarChart, Bar } from 'recharts';

const Home = () => {

  const [numbers, setNumbers] = useState([])
  const [users, setUsers] = useState([])
  const [data, setData] = useState([])


  const fetchNumbers = async () => {
    try {
      const response = await nodeRequest({ route: "http://127.0.0.1:8000/stats", body: "" });
      const nums = []
      const data = []
      response.map((item) => {
        nums.push(Object.values(item)[1]);
        data.push({ name: Object.keys(item)[1], count: Object.values(item)[1], time: Object.values(item)[0] })
      })
      setNumbers(nums)
      setData(data)
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNumbers();
  }, []);

  return (
    <main className='main-container ml-5'>
      <div className='main-title mb-5'>
        <h3 className='text-[#383838] font-semibold text-2xl'>Dashboard</h3>
      </div>
      <div className='main-cards'>
        <div className='card-inner flex items-center gap-4'>
          <div className='b-circle flex items-center justify-center bg-[#1ed690] h-14 w-14 rounded-full'>
            <FontAwesomeIcon icon={faUser} className='w-7 h-7 text-[#F3F5F8]' /></div>
          <div className='flex flex-col'>
            <p className='text-[#b1b1b1]'>Users</p>
            <p className='text-[#383838] font-bold'>{numbers[0]-1}</p>
          </div>
        </div>
        <div className='card-inner flex items-center gap-4'>
          <div className='b-circle flex items-center justify-center bg-[#1ed690] h-14 w-14 rounded-full'>
            <FontAwesomeIcon icon={faSwatchbook} className='w-7 h-7 text-[#F3F5F8]' /></div>
          <div className='flex flex-col'>
            <p className='text-[#b1b1b1]'>Collections</p>
            <p className='text-[#383838] font-bold'>{numbers[1]}</p>
          </div>
        </div>
        <div className='card-inner flex items-center gap-4'>
          <div className='b-circle flex items-center justify-center bg-[#1ed690] h-14 w-14 rounded-full'>
            <FontAwesomeIcon icon={faComments} className='w-7 h-7 text-[#F3F5F8]' /></div>
          <div className='flex flex-col'>
            <p className='text-[#b1b1b1]'>Discussions</p>
            <p className='text-[#383838] font-bold'>{numbers[2]}</p>
          </div>
        </div>
        <div className='card-inner flex items-center gap-4'>
          <div className='b-circle flex items-center justify-center bg-[#1ed690] h-14 w-14 rounded-full'>
            <FontAwesomeIcon icon={faFolderTree} className='w-7 h-7 text-[#F3F5F8]' /></div>
          <div className='flex flex-col'>
            <p className='text-[#b1b1b1]'>Files</p>
            <p className='text-[#383838] font-bold'>{numbers[3]}</p>
          </div>
        </div>
      </div>

      <div className='flex charts'>

        <LineChart width={450} height={300} data={data}>
          <Line type="monotone" dataKey="time" stroke="#1ed690" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis dataKey="time"/>
        </LineChart>

        <BarChart width={450} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="count" barSize={30} fill="#1ed690" />
        </BarChart>
      </div>
    </main>
  )
}

export default Home