import React, { useState } from "react";
import { Link } from 'react-router-dom';
import LoginForm from "../../components/base/LoginForm";
import RegisterForm from "../../components/base/RegisterForm";
import brain from '../../assets/brain.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const [login, setLogin] = useState(true);

  const navigate =useNavigate()

  const adminRoutes = () => {
    navigate('/adminLogin')
  }

  return (
    <>
    <div className="flex justify-between items-center px-14 py-4">
      <Link to='/'><FontAwesomeIcon icon={faChevronLeft} className="w-14 h-6 cursor-pointer  text-[#1ae690] hover:text-[#fff]" /></Link>
      <Button text={"ADMIN LOGIN"} onClick={adminRoutes} classname={'w-32 h-10 text-white'}/>
      </div>
      <div className="flex justify-center items-center gap-32 mt-10">
        {login ? (
          <LoginForm onToggle={() => setLogin(false)} />
        ) : (
          <RegisterForm onToggle={() => setLogin(true)} />
        )}
        <div className="flex justify-center items-center p-2"><img src={brain} alt="logo"></img></div>
      </div>
    </>
  )
}

export default Authentication