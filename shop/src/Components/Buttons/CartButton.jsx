import React, { useState } from 'react'
import './CartButton.css'
import { Link } from 'react-router-dom'

const CartButton = ({ text, to, onClick, backgroundColor, textColor, borderColor }) => {
    const [emojis, setEmojis] = useState([]);
    const buttonStyle = {
        backgroundColor: backgroundColor,
        borderColor: borderColor || 'transparent',
        color: textColor,
        border: `2px solid ${borderColor}`

    };

    const handleClick =() => {
      if (onClick) onClick();

      // Generates emojis when the button is clicked
      const newEmojis = Array.from({ length: 5 }, (_, i) =>(
        <span key={i} className='emoji'>❤</span>
      ));
      setEmojis(newEmojis);

      // Remove emojis after animation ends
      setTimeout(() => setEmojis([]), 1000);
    }

    if (to) {
        return (
            <Link to={to} className='custom-link' style={buttonStyle} onClick={handleClick}>
                {text}
                <div className='emoji-container'>{emojis}</div>
            </Link>
        )
    }


  return (
    <button className='custom-buttone' onClick={handleClick} style={buttonStyle}>
      {text}
      <div className='emoji-container'>{emojis}</div>
    </button>
  )
}

export default CartButton
