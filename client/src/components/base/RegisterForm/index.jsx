import React from 'react'
import { useState } from 'react'
import { sendRequest } from '../../../config/request';
import { useNavigate } from "react-router-dom";
import './style.css'
import Button from '../../UI/Button'
import CredentialsInput from '../../UI/CredentialsInput';

const RegisterForm = ({ onToggle }) => {

  const navigation = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "", password_m: "", name: "" });
  const [error, setError] = useState({ email: null, password: null, login: null });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const registerHandler = async () => {

    if (!validateEmail(credentials.email)) {
      setError({ ...error, email: "Invalid Email Address" });
      return;
    }

    if (credentials.password.length < 8) {
      setError({ ...error, password: "Password must be at least 8 characters long" });
      return;
    }

    if (credentials.password !== credentials.password_m) {
      setError({ ...error, password_m: "Passwords don't match " });
      return;
    }


    try {
      const response = await sendRequest({ method: "POST", route: "/register", body: credentials });
      localStorage.setItem("access_token", response.token);
      navigation("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex flex-col items-start gap-2 w-80'>
      <div className='flex flex-col gap-2 mb-2'>
        <h1 className='title text-4xl'>Signup</h1>
        <h6 className='font-semibold'>Enter your account details</h6>
      </div>
      <CredentialsInput label={'Name'} value={credentials.name} onChange={(name) => setCredentials({ ...credentials, name })} />
      <div className='flex flex-col w-full'>
        <CredentialsInput label={'Email'} value={credentials.email} onChange={(email) => setCredentials({ ...credentials, email })} />
        <div className='text-[#e75454]'>{error.email}</div>
      </div>
      <div className='flex flex-col w-full'>
        <CredentialsInput label={'Password'} value={credentials.password} onChange={(password) => setCredentials({ ...credentials, password })} type='password' />
        <div className='text-[#e75454]'>{error.password}</div>
      </div>
      <div className='flex flex-col w-full'>
        <CredentialsInput label={'Confirm Password'} value={credentials.password} onChange={(password_m) => setCredentials({ ...credentials, password_m })} type='password' />
        <div className='text-[#e75454]'>{error.password_m}</div>
      </div>
      {/* <h6>Forgot password?</h6> */}
      <Button text={"SIGNUP"} onClick={registerHandler} classname={'w-full h-9 my-3 text-white'} />
      <div className='flex gap-1'>
        <p className='flex w-full'>Already have an account?</p>
        <span className='text-[#1ED690] cursor-pointer' onClick={onToggle}>Login</span>
      </div>
    </div>
  )
}

export default RegisterForm