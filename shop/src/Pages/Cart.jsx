import React, { useState } from 'react'
import './Cart.css'
import Buttone from '../Components/Buttons/Buttone';

import DeleteIcon from '@mui/icons-material/Delete';
import Checkout from '../Components/Modals/Checkout';


const Cart = ({ removeFromCart }) => {

  const [showConfirmation, setShowConfirmation ] = useState(false);
  const [itemToDelete, setItemToDelete ] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false)

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    removeFromCart(null);
    setShowConfirmation(false);
    setItemToDelete(null);
  }

  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setItemToDelete(null);
  }

  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  }

  const handleCloseCheckout = () => {
    setShowCheckout(false);
  }
  
  const cartItems = [
    {
      id: 1,
      name: "Little Dutch Baby Walker",
      price: 537.52,
      savings: 134.38,
      image: "https://www.babyvillage.com.au/cdn/shop/files/132103.jpg?v=1702963536&width=800"
    },
    {
      id: 2,
      name: "Simple Joy",
      price: 180.02,
      savings: 34.38,
      image: "https://cdn.shopify.com/s/files/1/0507/0559/6600/files/132792_medium.jpg?v=1720414873"
    },
    {
      id: 3,
      name: "THULE URBAN GLIDE 2",
      price: 980.85,
      savings: 100.80,
      image: "https://www.thule.com/-/p/gKfet1IVQmoDsmhjIdalRrR-MJnTfHySZWdPP9_REOc/rs:fit/f:avif/cb:1.4/q:80/h:1200/w:1200/plain/approved/std.lang.all/57/75/1385775.png"
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const savings = cartItems.reduce((acc, item) => acc + item.savings, 0);


  return (
    <div className='cart-container'>
      <div className='cart-message'>
        THULE Urban Glide 2 was successfully added to you box
      </div>
      <div className='cart-title'>Your Cart</div>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <div className='cart-item' key={item.id}>
            <div className='cart-item-details'>
              <img src={item.image} alt={item.name} className='cart-item-image' />
              <div className='item-name'>{item.name}</div>
            </div>
            <div className='cart-price-details'>
              <DeleteIcon className="delete-icon" xs={2} onClick={() => handleDeleteClick(item)} />
              <div className='cart-item-price'>KSh  {item.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
        {showConfirmation && (
          <div className='confirmation-dialog'>
            <p>Are you sure you want to remove <b>{itemToDelete.name}</b> from the Cart?</p>
            <button onClick={handleConfirmDelete} className='yes-button'>YES</button>
            <button onClick={handleCancelDelete} className='no-button'>NO</button>
          </div>
        )}
      </div>
      <div className='cart-summary'>
        <div className='cart-total'>
          <div>TOTAL ACTUAL CART</div>
        </div>
        <div className='cart-savings'>
          <div>SAVING (KSh. {savings.toFixed(2)})</div>
        </div>
        <div>KSh. {total.toFixed(2)}</div>
      </div>
      <div className='cart-buttone'>
        <Buttone
          text="CONTINUE SHOPPING"
          backgroundColor="white"
          textColor='#00c3ff'
          borderColor="#00c3ff"
          butPadding='9px 200px'
          fontSz= '18px'
          fontWg='bold'
          to="/buy"
        />
        <Buttone
          text="PROCEED TO CHECKOUT"
          backgroundColor="#00c3ff"
          textColor='white'
          borderColor="#00c3ff"
          butPadding='9px 200px'
          fontSz= '18px'
          fontWg='bold'
          onClick={handleProceedToCheckout}
        />
      </div>
      {showCheckout && (
        <Checkout total={total} closeCheckout={handleCloseCheckout} />
      )}
    </div>
  )
}

export default Cart




// People also bought...
// Pick some random products and display together with their prices and allow users to also book them as well