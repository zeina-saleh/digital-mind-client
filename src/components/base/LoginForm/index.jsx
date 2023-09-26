import React from 'react'
import { useState } from 'react'
import { sendRequest } from '../../../config/request';
import { useNavigate } from "react-router-dom";
import './style.css'
import Button from '../../UI/Button'
import CredentialsInput from '../../UI/CredentialsInput';

const LoginForm = ({ onToggle }) => {

  const navigation = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: null, password: null, login: null });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const loginHandler = async () => {

    if (!validateEmail(credentials.email)) {
      setError({ ...error, email: "Invalid Email Address" });
      return;
    }

    if (credentials.password.length < 8) {
      setError({ ...error, password: "Password must be at least 8 characters long" });
      return;
    }

    try {
      console.log(credentials)
      const response = await sendRequest({ method: "POST", route: "/userlogin", body: credentials });
      localStorage.setItem("access_token", response.token);
      console.log(response.token)
      navigation("/home");
    } catch (error) {
      console.log(error);
      setError({ ...error, login: "Incorrect Email or Password" });
    }
  }
  return (
    <div className='flex flex-col items-start gap-4 w-80'>
      <div className='flex flex-col gap-2'>
        <h1 className='title text-4xl'>Login</h1>
        <h6 className='font-semibold'>Enter your account details</h6>
        <div className='text-[#e75454]'>{error.login}</div>
      </div>
      <div className='flex flex-col gap-1 w-full'>
        <CredentialsInput label={'Email'} className={'input'} onChange={(email) => setCredentials({ ...credentials, email })} />
        <div className='text-[#e75454]'>{error.email}</div>
      </div>
      <div className='flex flex-col gap-1 w-full'>
        <CredentialsInput label={'Password'} className={'input'} onChange={(password) => setCredentials({ ...credentials, password })} type='password' />
        <div className='text-[#e75454]'>{error.password}</div>
      </div>
      <h6>Forgot password?</h6>
      <div className='flex gap-1'>
        <p className='flex w-full'>Don't have an account?</p>
        <span className='text-[#20E399] cursor-pointer' onClick={onToggle}>Register</span>
      </div>
      <Button text={"LOGIN"} onClick={loginHandler} classname={'w-full h-9 text-white'} />
    </div>
  )
}

export default LoginForm