import React from 'react'
import { Link } from 'react-router-dom'
import './Buttone.css'

const Buttone = ({ text, onClick, backgroundColor, textColor, borderColor, to, condition, butPadding, fontSz, fontWg }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: textColor,
        condition: condition,
        padding: butPadding,
        fontSize: fontSz,
        fontWeight: fontWg,
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
        display: 'inline-block',
        textAlign: 'center',
        textDecoration: 'none',
        border: `2px solid ${borderColor}`
    };
    
    if (to) {
      return (
        <Link to={to} style={buttonStyle}>
          {text}
        </Link>
      )
    }
    
  return (
    <button className='custom-button' onClick={onClick} style={buttonStyle}>
        {text}
    </button>
  )
}

export default Buttone;


