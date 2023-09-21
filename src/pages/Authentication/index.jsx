import React, { useState } from "react";
import { Link } from 'react-router-dom';
import LoginForm from "../../components/base/LoginForm";
import RegisterForm from "../../components/base/RegisterForm";
import brain from '../../assets/brain.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Authentication = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <Link to='/'><FontAwesomeIcon icon={faChevronLeft} className="w-14 h-6 cursor-pointer mt-6 ml-6 text-[#1ae690] hover:text-[#fff]" /></Link>
      <div className="flex justify-center items-center gap-10 mt-16">
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