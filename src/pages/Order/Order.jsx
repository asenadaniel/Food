import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

function Order() {
  const { getTotalAmount } = useContext(StoreContext)
  return (
    <form className=' md:flex items-start justify-between flex-col md:flex-row gap-20 mt-[100px]'>
      <div className='w-[100%] mb-24 md:mb-0'>
        <p className=' text-xl font-semibold mb-14'>Delivery Infomation</p>
        <div className=' flex gap-3'>
          <input className=' mb-4 w-[100%] p-4 border border-solid border-black rounded outline-green-400' type="text" placeholder='First Name' />
          <input className=' mb-4 w-[100%] p-4 border border-solid border-black rounded outline-green-400' type="text" placeholder='Last Name' />
        </div>
        <input className=' mb-4 w-[100%] p-4 border border-solid border-black rounded outline-green-400' type="email" placeholder='Email address' />
        <input className=' mb-4 w-[100%] p-4 border border-solid border-black rounded outline-green-400' type="text" placeholder='Street' />
        <div className=' flex gap-3'>
          <input className=' mb-4 w-[100%] p-4 border border-solid border-black rounded outline-green-400' type="text" placeholder='City' />
          <input className=' mb-4 w-[100%] p-4 border border-solid border-black rounded outline-green-400' type="text" placeholder='State' />
        </div>
        <div className=' flex gap-3'>
          <input className=' mb-4 w-[100%] p-4 border border-solid border-black rounded outline-green-400' type="text" placeholder='Zip code' />
          <input className=' mb-4 w-[100%] p-4 border border-solid border-black rounded outline-green-400' type="text" placeholder='Country' />
        </div>
        <input className=' mb-4 w-[100%] p-4 border border-solid border-black rounded outline-green-400' type="text" placeholder='Phone' />
      </div>

      <div className=' w-full'>
        <div className='flex justify-center w-[100%] mr-[200px] flex-col gap-5 ' id='cartTotal'>
          <h2 className='text-3xl'>Cart Totals</h2>
          <div className=' flex justify-between '>
            <p>Subtotal</p>
            <p>₦{getTotalAmount()}</p>
          </div>
          <div className=' flex  justify-between '>
            <p>Delivery Fee</p>
            <p>₦{getTotalAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className=' flex  justify-between '>
            <p>TOTAL</p>
            <p>₦{getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</p>
          </div>
          <button className='mt-14 border-none text-white bg-black md:w-[80%] py-4 md:px-0 px-8 rounded-md cursor-pointer' onClick={() => navigate('/')} >
            PROCESS PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default Order
