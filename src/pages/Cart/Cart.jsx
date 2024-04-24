import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'


function Cart() {
  const { cart, food_list, removeCart, getTotalAmount } = useContext(StoreContext)
  return (
    <div className=' mt-[20px] gap-4'>
      <div className=''>
        <h1 className=' text-3xl mb-9 text-center'>Food Cart</h1>
        <div className=' grid gap-8  grid-cols-6 items-center text-1xl'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quant</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cart[item._id] > 0) {
            return (
              <div className=' grid  grid-cols-6 items-center  gap-9 my-6 mx-0'>
                <img
                  className=' w-13'
                  src={item.image}
                  alt=""
                />

                <p>{item.name}</p>

                <p>N {item.price}</p>

                <p className='bg-black text-white md:text-left px-2 py-1 text-center'>
                  {cart[item._id]}
                </p>

                <p>N {item.price * cart[item._id]}</p>

                <p className=' bg-red-700 cursor-pointer text-white flex justify-center items-center' onClick={() => removeCart(item._id)}>x</p>
              </div>
            )
          }
        })}
      </div>
      <div className='mt-24  flex justify-center gap-10 '>

        <div className='flex justify-center w-[90%] md:w-[80%] flex-col gap-5 ' id='cartTotal'>
          <h2 className='text-3xl'>Cart Totals</h2>
          <div className=' flex justify-between '>
            <p>Subtotal</p>
            <p>₦{getTotalAmount()}</p>
          </div>
          <div className=' flex  justify-between '>
            <p>Delivery Fee</p>
            <p>₦{2}</p>
          </div>
          <hr />
          <div className=' flex  justify-between '>
            <p>TOTAL</p>
            <p>₦{getTotalAmount() + 2}</p>
          </div>
        </div>

      </div>
      <button className='mt-14 border-none text-white bg-black md:w-[50%] py-4 md:px-0 px-8 rounded-md cursor-pointer'>KINDLY PROCEED TO CHECKOUT 😊</button>
    </div>
  )
}

export default Cart;
