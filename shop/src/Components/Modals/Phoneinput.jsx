import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import './Phoneinput.css';

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className='phone-number-input'>
      
      <PhoneInput
        country={'ke'}
        value={phone}
        onChange={phone => setPhone(phone)}
        containerStyle={{
          width: '100%',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
        disableSearchIcon={false}
        inputStyle={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;
