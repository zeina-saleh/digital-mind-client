import React from 'react'
import { useState } from 'react'
import { sendRequest } from '../../../config/request';
import { useNavigate } from "react-router-dom";
import Input from '../../UI/Input'
import './style.css'
import Button from '../../UI/Button'

const RegisterForm = ({ onToggle }) => {

  const navigation = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: ""
  });

  const registerHandler = async () => {
    try {
      const response = await sendRequest({method: "POST", route: "/register", body: credentials});
      localStorage.setItem("access_token", response.token);
      navigation("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex flex-col items-start gap-5 w-80'>
      <div className='flex flex-col gap-2'>
        <h1 className='title'>Signup</h1>
        <h6 className='font-semibold'>Enter your account details</h6>
      </div>
      <Input label={'Name'} value={credentials.name} onChange={(name) => setCredentials({ ...credentials, name })} />
      <Input label={'Email'} value={credentials.email} onChange={(email) => setCredentials({ ...credentials, email })} />
      <Input label={'Password'} value={credentials.password} onChange={(password) => setCredentials({ ...credentials, password })} type='password' />
      <h6>Forgot password?</h6>
      <h6 className='flex w-full text-[#20E399] cursor-pointer' onClick={onToggle}>Already have an account? Login</h6>
      <Button text={"Signup"} onClick={registerHandler} classname={'w-full text-white'} />
    </div>
  )
}

export default RegisterForm