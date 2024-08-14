// src/components/PaymentMode.jsx
import React, { useState } from 'react';
import './PaymentMode.css';

const PaymentMode = () => {
  const [selectedMode, setSelectedMode] = useState('mpesa'); // Set default to 'mpesa'

  const handleSelectChange = (event) => {
    setSelectedMode(event.target.value);
  };

  return (
    <div className="payment-mode-container">
      <label htmlFor="payment-mode">Choose a payment mode:</label>
      <div className="custom-select-container">
        <select id="payment-mode" className="custom-select" value={selectedMode} onChange={handleSelectChange}>
          <option value="mpesa">M-Pesa</option>
          <option value="airtel">Airtel Money</option>
        </select>
      </div>
      <div className="selected-mode">
        {selectedMode === 'mpesa' ? 'Default payment is M-Pesa' : `You selected: ${selectedMode === 'mpesa' ? 'M-Pesa' : 'Airtel Money'}`}
      </div>
    </div>
  );
};

export default PaymentMode;
