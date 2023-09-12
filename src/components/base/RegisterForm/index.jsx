import React from 'react'
import Input from '../../UI/Input'
import './style.css'
import Button from '../../UI/Button'

const RegisterForm = () => {
  const print = () => {
    console.log(event.target.value)
  }
  return (
    <div className='flex flex-col items-start gap-5 w-80'>
      <div className='flex flex-col gap-2'>
        <h1 className='title'>Signup</h1>
        <h6 className='font-semibold'>Enter your account details</h6>
      </div>
      <Input label={'Name'} onChange={print} />
      <Input label={'Email'} onChange={print} />
      <Input label={'Password'} onChange={print} type='password' />
      <h6>Forgot password?</h6>
      <h6 className='flex w-full text-[#20E399] cursor-pointer'>Don't have an account? Register</h6>
      <Button text={"Login"} onClick={print} classname={'w-full'} />
    </div>
  )
}

export default RegisterForm