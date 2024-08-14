import React, { useState } from 'react'
import './Checkout.css'
import Phoneinput from './Phoneinput'
import PaymentMode from './PaymentMode'
import { ClipLoader } from 'react-spinners'
import GrowSpinner from './GrowSpinner'

const Checkout = ({ total, closeCheckout }) => {
  const [showSpinner, setShowSpinner] = useState(false)
  
  const handlePayClick = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false)
      closeCheckout()
    }, 10000)   // Spinner goes off after 5 seconds
  }

  return (
    <div className='checkout-container'>
      <div className='checkout-box'>
        <h3>ORDER NO: 004894</h3>
        <input type='email' placeholder='Email' value='demo001@gmail.com' readOnly />
        <div className='checkout-payment' >
          <PaymentMode />
          <Phoneinput />
        </div>
        <label>
            <input type='checkbox' />
            Remember me
        </label>
        <button className='pay-button' onClick={handlePayClick}>Pay KSh{total.toFixed(2)}</button>
        <button className='close-button' onClick={closeCheckout}>Close</button>
      </div>
      {showSpinner && (
        <div className='spinner-overlay'>
          <ClipLoader color='#f39c12' size={50} />
          <GrowSpinner size='large' />
        </div>
      )}
    </div>
  )
}

export default Checkout

//* Dropdown => Choice of either Mpesa or Airtel Money

//* Dropdown => Choice of country code (+254) + Input for rest of the phone number