import React from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className='product-image' />
      </Link>
      <h2 className='product-name'>{product.name}</h2>
      <p className='product-price'>Ksh. {product.price}</p>
      <button className='add-to-cart'>Add to Cart +</button>
    </div>
  );
};

export default ProductCard;
