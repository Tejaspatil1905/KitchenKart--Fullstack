import React, { useState, useContext } from 'react'
import './Navbar.css'

import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';



const Navbar = ({setShowLogin}) => {
    const[menu,setmenu] = useState("Home");

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to='./'><img height={112} src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            < Link to='/' onClick={()=>setmenu("Home")}  className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            
            <a href='#footer' onClick={()=>setmenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <Link to='./cart'>  <img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot" }></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)} >  Signin</button>:<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className='navbar-profile-dropdown'>
                <li>
                  <img src={assets.bag_icon} alt="" />
                  <p>Orders</p>
                  </li>
                  <hr />
                  <li onClick={()=>setToken("")}>
                    <img src={assets.logout_icon} alt="" />
                    <p>
                      Logout
                    </p>
                    </li>
                  </ul>
                </div>
              }
              
        </div>
      
    </div>
  )
}

export default Navbar
