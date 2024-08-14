import React from 'react';
import './Guest.css'
import sample from '../Components/Assets/sample.jpg'
import Buttone from '../Components/Buttons/Buttone';

const Guest = () => {
    const handleButtonClick1 = () => {
        alert('Buy Button Clicked!');
    };
    
    const handleButtonClick2 = () => {
        alert('Sell Button Clicked!');
    };

  return (
    <div className="guest-container">
      <header className="header">
        <Buttone
            text='BUY'
            onClick={handleButtonClick1}
            backgroundColor="white"
            textColor='#87CEEB'
            borderColor="#87CEEB"
            butPadding='9px 200px'
            fontSz= '18px'
            fontWg='bold'
            to='/buy'
        />
        <Buttone
            text='SELL'
            onClick={handleButtonClick2}
            backgroundColor="white"
            textColor='#FF69B4'
            borderColor="#FF69B4"
            butPadding='9px 200px'
            fontSz= '18px'
            fontWg='bold'
            to='/sell'
        />
      </header>
      <div className="content">
        <div className="cycle-container">
          <img
            src={sample}
            alt="How Baybe Works"
            className="cycle-image"
          />
        </div>
        <h1>YOU SELL <br/>TO US</h1>
      </div>
    </div>
  );
};

export default Guest;
