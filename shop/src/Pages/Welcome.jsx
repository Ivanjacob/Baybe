import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Welcome.css'
import bannerImage from '../Components/Assets/baby6.png'

const Welcome = () => {
  return (
    <div className="welcome">
      <Navbar />
      <div className="welcome-content">
        <div className="welcome-slogan">
          <p>Your baby gets more, <br/> You pay less </p>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="welcome-banner">
          <img src={bannerImage} alt="Baby" />
        </div>
      </div>
    </div>
  )
}

export default Welcome
