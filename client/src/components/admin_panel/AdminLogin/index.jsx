import React from 'react'
import { useState } from 'react'
import { nodeRequest } from '../../../config/nodeRequest';
import { useNavigate, Link } from "react-router-dom";
import Button from '../../UI/Button'
import CredentialsInput from '../../UI/CredentialsInput';
import brain from '../../../assets/brain.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AdminLogin = ({ onToggle }) => {

    const navigation = useNavigate();

    const [credentials, setCredentials] = useState({ email: null, password: null });
    const [error, setError] = useState({ email: null, password: null, login: null });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const loginLogger = async () => {

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

            const response = await nodeRequest({ method: "POST", route: "http://127.0.0.1:8000/auth/adminlogin", body: credentials, });
            console.log(response)
            if (response.token) {
                localStorage.setItem("node_token", response.token);
                navigation("/admin/");
            } else {
                setError(response.message);
            }

        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }
    return (
        <>
            <Link to='/'><FontAwesomeIcon icon={faChevronLeft} className="w-14 h-6 mt-5 ml-5 cursor-pointer  text-[#1ae690] hover:text-[#fff]" /></Link>
            <div className='flex justify-center items-center gap-32 mt-14'>
                <div className='flex flex-col items-start gap-4 w-80'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='title text-4xl'>Admin Login</h1>
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
                    <Button text={"LOGIN"} onClick={loginLogger} classname={'w-full h-9 text-white'} />
                </div>
                <div className="flex justify-center items-center p-2"><img src={brain} alt="logo"></img></div>
            </div>
        </>
    )
}

export default AdminLogin