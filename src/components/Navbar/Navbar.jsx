import React, { useState } from 'react'
import './navbar.css'
import { Search, ShoppingBagOutlined } from '@mui/icons-material'
import MobileNav from '../MobileNav/MobileNav'
import { Link } from 'react-router-dom'

function Navbar({ setOpenLoginModal }) {

  const [menu, setMenu] = useState('home')

  return (
    <div className='py-10 px 0  lg:py-20 lg:px-0 flex justify-between items-center   ' >
      <h1 className='lg:text-3xl xl:text-4xl text-2xl font-bold text-green-800'>FOOD</h1>
      <ul className=' gap-5 text-[18px] cursor-pointer hidden md:flex '>
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'nav-active' : ''}>Home</Link>
        <a href='#discoverMenu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'nav-active' : ''}>Menu</a>
        <a href='#contactUs' onClick={() => setMenu('contactUs')} className={menu === 'contactUs' ? 'nav-active' : ''}>Contact us</a>
      </ul>
      <div className=' flex items-center gap-6'>
        <div className='hidden md:inline'>
          <Search />
        </div>
        <div className=' relative'>
          <ShoppingBagOutlined />
          <div className=' absolute min-w-3 min-h-3  rounded-md bg-green-800 top-1 right-[-12px]'></div>
        </div>

        <button
          className=' text-[17px] border border-solid border-green-800 py-2 px-7 rounded-[50px] cursor-pointer hover:bg-green-600 transition-colors duration-300  bg-transparent hidden md:inline'
          onClick={() => setOpenLoginModal(true)}
        >
          sign in
        </button>
        <div className='md:hidden'>
          <MobileNav setOpenLoginModal={setOpenLoginModal} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
