import React from 'react'
import broad from '../assets/broadcasting.jpg'

export const login = () => {
  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex-col'>
            <div className='absolute top-[25%] left-[10%] flext flex-col'>
                <h1 className='text-4xl text-white font-bold my-4'>Kairaa Academy</h1>
                <p className='text-2xl text-white font-bold'>Start your career</p>
            </div>
            <img src={broad} className='h-full w-full object-contain '/>
        </div>
        <div className='w-1/2 h-full bg-slate-200 flex flex-col p-20 justify-between'>
        <div className='w-full h-full bg-gray-200 flex flex-col'>
            <h3 className='text-2xl font-semibold mb-4'>Login</h3>
            <p>Welcome Back! Please Enter your details.</p>
        </div>
        <div className='w-full flex flex-col'>
            <input type="email" placeholder='Enter your mail'
            className='w-full my-4 text-black py-4 bg-transparent boder-black outline-none focus:outline-none'/>
            <input type="password" placeholder='Enter your Password'
            className='w-full my-4 text-black py-4 bg-transparent boder-black outline-none focus:outline-none'/>
            <div className='flex justify-between'>
                <button className='w-[180px] h-[50px] bg-teal-300 rounded text-black hover:bg-slate-50 hover:text-black'>LOGIN</button>
                <button className='w-[180px] h-[50px] bg-teal-300 rounded text-black hover:bg-slate-50 hover:text-black'>SIGNUP</button>
            </div>
        </div>
        <div className='w-full items-center justify-center'>
            <p> Can't Remember Password? <a className='border-l-blue-200'href="http://kairaablockchainacademy.com/account/forgot">Forget</a>Password.</p>
        </div></div>
    </div>
  )
}
