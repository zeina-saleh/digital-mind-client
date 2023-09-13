import React from 'react'
import { useState } from 'react'
import { sendRequest } from '../../../config/request';
import { useNavigate } from "react-router-dom";
import Input from '../../UI/Input'
import './style.css'
import Button from '../../UI/Button'

const LoginForm = ({ onToggle }) => {

  const navigation = useNavigate();
  //
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
      localStorage.setItem("access_token", response.authorization.token);
      navigation("/home");
    } catch (error) {
      console.log(error);
      setError("Incorrect Email/Password");
    }
  }
  return (
    <div className='flex flex-col items-start gap-5 w-80'>
      <div className='flex flex-col gap-2'>
        <h1 className='title'>Login</h1>
        <h6 className='font-semibold'>Enter your account details</h6>
      </div>
      <Input label={'Email'} className={'input-wrapper1'} onChange={(email) => setCredentials({ ...credentials, email })} />
      <Input label={'Password'} className={'input-wrapper1'} onChange={(password) => setCredentials({ ...credentials, password })} type='password' />
      <h6>Forgot password?</h6>
      <h6 className='flex w-full text-[#20E399] cursor-pointer' onClick={onToggle}>Don't have an account? Register</h6>
      <Button text={"Login"} onClick={loginHandler} classname={'w-full text-white'} />
    </div>
  )
}

export default LoginForm