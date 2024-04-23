import { CloseOutlined, MenuOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MobileNav() {

  const [open, setOpen] = useState(false)


  return (
    <div className=''>
      {!open ?
        (
          <div onClick={() => setOpen(true)}>
            <MenuOutlined />
          </div>
        ) :
        (<div onClick={() => setOpen(false)}>
          <CloseOutlined />
        </div>
        )
      }

      {open && <div className=' bg-green-200 text-black absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-8 z-20'>

        <button className='text-[17px] border border-solid border-green-800 py-2 px-7 rounded-[50px] cursor-pointer hover:bg-green-600'>Sign In</button>
      </div>

      }

    </div>
  )
}

export default MobileNav
