import React from 'react'
import './discoverMenu.css'
import { menu_list } from '../../assets/assets'



function DiscoverMenu({ category, setCategory }) {


  return (
    <div className=' flex flex-col gap-5' id='discoverMenu'>
      <h1 className=' font-medium text-xl'>
        Explore our comprehensive menu selection.
      </h1>
      <p className=' '>
        Select from a diverse menu offering a delightful range of culinary options.
      </p>
      <div className=' flex justify-between items-center gap-8 text-center my-5 mx-0 overflow-scroll scroll '>
        {menu_list.map((item, i) => {
          return (
            <div key={i} >
              <div className='' onClick={() => setCategory((prev) => prev === item.menu_name ? 'All' : item.menu_name)}>
                <img
                  src={item.menu_image}
                  alt=""
                  className={category === item.menu_name ? 'active' : ''
                  }
                  id='img'
                />
                <p className=' mt-3 text-[18px] cursor-pointer text-gray-600'>{item.menu_name}</p>
              </div>
            </div>
          )
        })}
      </div>
      <hr className=' my-3 px-0 h-[2px] bg-black border-none' />
    </div>
  )
}

export default DiscoverMenu
