import React from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

import './SingleProduct.css'

import Buttone from '../Components/Buttons/Buttone'
import CartButton from '../Components/Buttons/CartButton.jsx'

import products from '../Components/Assets/Data/products.js'

const CustomPrevArrow = (onClickHandler, hasPrev, label) => 
  hasPrev && (
      <button
          type="button"
          onClick={onClickHandler}
          title={label}
          style={{
              position: 'absolute',
              zIndex: 2,
              top: 'calc(50% - 15px)',
              left: 15,
              width: 30,
              height: 30,
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transform: 'translateY(-50%)',
          }}
      >
          <span style={{ fontSize: '35px', color: 'black' }}>{'<'}</span>
      </button>
  );

const CustomNextArrow = (onClickHandler, hasNext, label) => 
  hasNext && (
      <button
          type="button"
          onClick={onClickHandler}
          title={label}
          style={{
              position: 'absolute',
              zIndex: 2,
              top: 'calc(50% - 15px)',
              right: 15,
              width: 30,
              height: 30,
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transform: 'translateY(-50%)',
          }}
      >
          <span style={{ fontSize: '35px', color: 'black' }}>{'>'}</span>
      </button>
  );


const SingleProduct = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }


  return (
    <div className='product-detail'>
      
      <div className='product-carousel'>
        <div className='price-tab'>
          <h2 className='price-amount'>KSh. {product.price}</h2>
          <p className='discount-amount'>save {product.discount}%</p>
        </div>

        <Carousel 
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          renderArrowPrev={CustomPrevArrow}
          renderArrowNext={CustomNextArrow}
        >
          {product.images.map((image, index) => (
              <div key={index}>
                  <img src={image} alt={product.name} />
              </div>
          ))}
        </Carousel>
        <div className='condition-button'>
            <Buttone
              text={product.condition}
              butPadding='2px 30px'
              backgroundColor="white"
              textColor='#87CEEB'
              borderColor="#87CEEB"
            />
            <Buttone
              text={product.condition}
              butPadding='2px 30px'
              backgroundColor="white"
              textColor='#007FFF'
              borderColor="#007FFF"
              fontSz= '18px'
              fontWg='bold'
            />
            <Buttone
              text="Red"
              butPadding='2px 30px'
              backgroundColor="white"
              textColor='#FF0000'
              borderColor="#ff0000"
              fontSz= '18px'
              fontWg='bold'
            />
        </div>
      </div>
      <div className='product-info'>
          <div className='info-container' >
            <p><b>PRODUCT NAME</b> <span className="product-name">{product.name}</span></p> <br/>
            <p1><b>FEATURES</b></p1>
            <ul>
                {product.description.map((feature, index) => (
                    <li key={index}>- {feature}</li>
                ))}
            </ul>
          </div>
          <div className='cart-buttons'>
            <CartButton
                text="Add to Cart"
                backgroundColor='#007FFF'
                textColor="white"
            />
            <CartButton
                text="Add to ❤WishList"
                backgroundColor='white'
                textColor="#007FFF"
                borderColor="#007FFF"
            />
          </div>
      </div>
    </div>
  )
}

export default SingleProduct


// <Carousel showThumbs={true} >
// {product.images.map((image, index) => (
//     <div key={index}>
//         <img src={image} alt={product.name} />
//     </div>
// ))}
// </Carousel>


// <CCarousel className='custom-carousel' controls>
// {product.images.map((image, index) =>(
//   <CCarouselItem key={index}>
//     <CImage className='custom-carousel-item' src={image} alt={`slide ${index+1}`} /> 
//   </CCarouselItem>
// ))}
// </CCarousel>