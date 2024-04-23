import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function Food({ category }) {
  const { food_list } = useContext(StoreContext)
  return (
    <div className=' mt-8'>
      <h2 className=' text-xl font-semibold'>Top-notch dining options in close proximity.</h2>
      <div id='food' className=' grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-14 gap-5 '>
        {food_list.map((item, i) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={i}
                id={item._id}
                name={item.name}
                img={item.image}
                price={item.price}
                desc={item.description}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default Food
