import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/Order/Order'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'



function App() {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  return (
    <>
      {openLoginModal ? <Login setOpenLoginModal={setOpenLoginModal} /> : <div></div>}
      <div className=' w-[90%] m-auto  '>
        <Navbar setOpenLoginModal={setOpenLoginModal} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
