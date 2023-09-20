import React from 'react'
import { useState } from 'react'
import { sendRequest } from '../../../config/request';
import { useNavigate } from "react-router-dom";
import './style.css'
import Button from '../../UI/Button'
import CredentialsInput from '../../UI/CredentialsInput';

const LoginForm = ({ onToggle, setIsLogged }) => {

  const navigation = useNavigate();
  
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const loginHandler = async () => {

    if (!validateEmail(credentials.email)) {
      setError("Invalid Email Address");
      return;
    }

    if (credentials.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await sendRequest({ method: "POST", route: "/login", body: credentials });
      localStorage.setItem("access_token", response.token);
      navigation("/home");
      setIsLogged(true)
    } catch (error) {
      console.log(error);
      setError("Incorrect Email/Password");
    }
  }
  return (
    <div className='flex flex-col items-start gap-5 w-80'>
      <div className='flex flex-col gap-2 px-2'>
        <h1 className='title text-4xl'>Login</h1>
        <h6 className='font-semibold'>Enter your account details</h6>
      </div>
      <CredentialsInput label={'Email'} className={'input'} onChange={(email) => setCredentials({ ...credentials, email })} />
      <CredentialsInput label={'Password'} className={'input'} onChange={(password) => setCredentials({ ...credentials, password })} type='password' />
      <h6 className='px-2'>Forgot password?</h6>
      <div className='flex gap-1 px-2'>
        <p className='flex w-full'>Don't have an account?</p>
        <span className='text-[#20E399] cursor-pointer' onClick={onToggle}>Register</span>
      </div>
      <Button text={"LOGIN"} onClick={loginHandler} classname={'w-full h-9 text-white'} />
    </div>
  )
}

export default LoginForm