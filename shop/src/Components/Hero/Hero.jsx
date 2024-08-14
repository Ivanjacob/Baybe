import React from 'react'
import './Hero.css'
import '../../Pages/Welcome.css'
import baby6 from '../Assets/baby6.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <p>Your baby gets more, <br/> You pay less </p>
            <div className="search-container">
                <input type="text" placeholder="Search" />
                <button>
                <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
        <div className="hero-right">
          <img src={baby6} alt="Baby" />
        </div>
    </div>
  )
}

export default Hero
