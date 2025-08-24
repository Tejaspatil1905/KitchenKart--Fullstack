import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/cart'
import Placeorder from './pages/placeorder/placeorder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/placeorder' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
