import React from 'react'
import { assets } from '../assets/assets'

function DownloadApp() {
  return (
    <div className=' mx-auto my-auto mt-[100px] font-medium text-center text-2xl'>
      <p>
        Elevate your experience with our Food App - Download now for optimal enjoyment.
      </p>
      <div className=' flex justify-center flex-col md:flex-row gap-8 mt-10 cursor-pointer items-center' >
        <img src={assets.play_store} alt="" className=' w-[300px]' />
        <img src={assets.app_store} alt="" className=' w-[300px]' />
      </div>
    </div>
  )
}

export default DownloadApp
