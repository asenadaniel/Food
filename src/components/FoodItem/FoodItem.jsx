import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Add, Remove } from '@mui/icons-material'
import { StoreContext } from '../../context/StoreContext'

function FoodItem({ id, name, desc, price, img }) {

  const { addToCart, removeCart, cart } = useContext(StoreContext)

  return (
    <div className=' w-[100%] m-auto shadow-md  '>
      <div>
        <img
          src={img}
          alt=""
          className=' w-[100%] rounded-tl-2xl  '
        />
      </div>
      <div className=' p-5'>
        <div className=' flex justify-between items-center mb-3' >
          <p className=' text-xl font-medium'>{name}</p>
          <img src={assets.rating_starts} alt="" className=' ' />
        </div>
        <p className=' text-gray-600'>{desc}</p>
        <div className=' flex justify-between'>
          <p className=' text-xl font-medium '>₦{price}</p>
          {!cart[id] ?
            <Add className=' bg-black rounded-full text-white cursor-pointer' onClick={() => addToCart(id)} /> :
            <div className=' flex gap-3'>
              <Remove className='  bg-red-400 text-red-800 rounded-xl cursor-pointer' onClick={() => removeCart(id)} />
              <p>{cart[id]}</p>
              <Add className=' bg-green-400 text-green-800 rounded-xl cursor-pointer' onClick={() => addToCart(id)} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default FoodItem
