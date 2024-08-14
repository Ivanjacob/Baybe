import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Shop from './Pages/Shop'

import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import SignupLogin from './Pages/SignupLogin';
import Guest from './Pages/Guest'
import SingleProduct from './Pages/SingleProduct'
import Sell from './Pages/Sell';

import Wishlist from './Pages/Wishlist';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsGuest(false);
  };

  const handleGuest = () => {
    setIsGuest(true);
    setIsLoggedIn(false);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/login' element={<LoginSignup onLogin={handleLogin} />} />
          <Route path='/signup' element={<SignupLogin/>} />
          <Route path='/product/:productId' element={<SingleProduct />} />
          <Route path='/buy' element={<Product/>}/>
          <Route path='/sell' element={<Sell />} />
          <Route path='/guest' element={<Guest onGuest={handleGuest} />} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route 
            path='/cart' 
            element={isLoggedIn ? <Cart /> : <Navigate to={isGuest ? '/wishlist' : '/login'} replace />}
          />
 
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;


// <Route path='/sell' element={<ShopCategory category="sell" />} />