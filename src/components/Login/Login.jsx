import React, { useState } from 'react'

import './Login.css'


function Login({ setOpenLoginModal }) {
  const [currentState, setCurrentState] = useState('Sign Up ')
  return (
    <div className=' absolute justify-center items-center z-10 w-[100%] h-[100%] bg grid' >
      <form className=' max-custom   text-gray-700 bg-white flex flex-col gap-6 py-6 px-8 rounded-lg text-sm  ' >
        <div className=' flex justify-between items-center text-black '>
          <h2 className=' text-xl text-green-900'>{currentState}</h2>
          <p className=' cursor-pointer text-red-800 font-bold ' onClick={() => setOpenLoginModal(false)}> close</p>
        </div>
        <div className=' flex flex-col gap-7'>
          {currentState === 'Login' ? ''
            : <input
              type="text"
              placeholder='Your Name'
              required
              className=' border-solid border-2 border-slate-500 outline-none rounded p-3'
            />}

          <input
            type="email"
            placeholder='Your Email'
            required
            className='border-solid border-2 border-slate-500 outline-none rounded p-3'
          />
          <input
            type="password"
            placeholder='Passowrd'
            required
            className=' border-solid border-2 border-slate-500 outline-none rounded p-3'
          />
        </div>
        <button className=' p-3 border-none text-white bg-green-700 rounded cursor-pointer '>
          {currentState === 'Sign Up' ? 'Create an Account' : 'Login'}
        </button>
        <div className=' flex items-start gap-3 mt-2'>
          <input className=' mt-1' type="checkbox" required />
          <p>
            By moving forward, I acknowledge and accept the terms of service and privacy policy.
          </p>
        </div>
        {currentState === 'Login' ?
          (<p>
            Create a new account? <span className=' cursor-pointer font-bold' onClick={() => setCurrentState('Sign Up')}>click here</span>
          </p>
          )
          :
          (
            <p>Already have an account? <span className=' cursor-pointer font-bold' onClick={() => setCurrentState('Login')}>Login</span></p>
          )
        }
      </form>
    </div>
  )
}

export default Login
