import React from 'react'
import './header.css'

function Header() {
  return (
    <div className=' h-[38vw]   my-8 mx-auto relative background'>
      <div className=' absolute flex flex-col items-start gap-5 max-w-[45%] md:max-w-[65%] xl:max-w-[50%] bottom-[10%] left-[6vw]'>
        <h2 className='  font-bold text-white text-sm md:text-3xl lg:text-4xl xl:text-5xl'>Order Your Favorite Food Here</h2>
        <p className=' hidden text-white md:block  '>
          Indulge in a diverse menu of carefully crafted dishes made with the finest ingredients. We're here to delight your taste buds and elevate your dining experience, bite by bite
        </p>
        <button className=' border-none font-medium md:py-3 md:px-5 py-2 px-[6px] bg-white text-sm md:text-xl rounded-full bg-transparent '>view Menu</button>
      </div>
    </div>
  )
}

export default Header
