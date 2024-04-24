import { Instagram, Twitter, WhatsApp } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=' bg-gray-900 flex text-white  gap-5 p-12 pt-9 justify-center w-full   mt-[100px]' id='contactUs'>
      <div className=' text-center '>
        <div className='flex flex-col items-center gap-5 mb-3'>
          <Link to='/' >
            <h1 className=' text-4xl font-bold text-green-800'>
              FOOD
            </h1>
          </Link>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, voluptatum!
          </p>
          <div className=' flex gap-6'>
            <Instagram className=' text-pink-500' />
            <Twitter className=' text-blue-500' />
            <WhatsApp className=' text-green-500' />
          </div>
          <p>asenadaniel@gmail.com</p>
        </div>

        <p> &copy; {currentYear} Food - All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
