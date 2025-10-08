import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' height={112} src={assets.KitchenKart} alt="" />
      <img className='logo' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
