import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
 
const Navbar = () => {

  const [menu, setMenu] = useState();

  return (
    <div className='navbars'>
      <div className="navs-logo">
        <img src={logo} alt=""/>
        <p onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Baybe</Link></p>
      </div>
      <ul className="navs-menu">
        <li onClick={()=>{setMenu("buy")}}><Link style={{ textDecoration: 'none' }} to='/buy'>Buy</Link>{menu==="buy"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sell")}}><Link style={{ textDecoration: 'none' }} to='/sell'>Sell</Link>{menu==="sell"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("guest")}}><Link style={{ textDecoration: 'none' }} to='/guest'>Guest</Link>{menu==="guest"?<hr/>:<></>}</li>
      </ul>
      <div className="navs-login-cart">
        <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
        <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="navs-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
 