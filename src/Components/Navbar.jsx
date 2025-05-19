import React from 'react'
import logo from '../assets/logo.png'
import { CircleUser ,Bell } from 'lucide-react';

const Navbar = () => {
  return (
   <>
     <nav className='px-12 py-4 bg-teal-700 h-24 flex w-full items-center justify-between'>
        <img className='h-40 w-45' src={logo} />
        <span className='flex gap-6'>
        <button className='text-lg'><CircleUser size={28} color="#252d41" /></button>
         <button><Bell size={28} color="#252d41" /></button>
        </span>
      </nav>
   </>
  )
}

export default Navbar
