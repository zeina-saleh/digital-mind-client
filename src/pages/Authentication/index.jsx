import React, { useState } from "react";
import LoginForm from "../../components/base/LoginForm";
import RegisterForm from "../../components/base/RegisterForm";
import brain from '../../assets/brain.svg'

const Authentication = ({setIsLogged}) => {
    const [login, setLogin] = useState(true);
  return (
    <div className="flex justify-center items-center gap-10 mt-20">
      {login ? (
        <LoginForm setIsLogged={setIsLogged} onToggle={() => setLogin(false)} />
      ) : (
        <RegisterForm onToggle={() => setLogin(true)} />
      )}
      <div className="flex justify-center items-center p-2"><img src={brain} alt="logo"></img></div>
    </div>
  )
}

export default Authentication