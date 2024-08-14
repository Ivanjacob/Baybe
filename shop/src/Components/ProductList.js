import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'


const products = [
    {
        id: 1,
        name: "Touched By Nature",
        category: "Baby Clothes",
        image: "https://cdn.shopify.com/s/files/1/0507/0559/6600/files/132733_medium.jpg?v=1720414844",
        price: 45.00,
        condition: "Very Good",
        description: [
            "Includes a unique leatherette bumper bar that folds",
            "Ergonomic curved seat back keeps baby separate",
            "Compact shopping basket",
            "One hand 4-position recline seat",
            "Reflective harness, carry strap, rear wheel brake",
            "One hand 4-position recline seat, soft, padded seat",
            "Extendable hood with sun visor and ventilated panel",
            "360° front lockable swivel wheels, compact umbrella fold",
            "Storage pocket stroller on the hood, viewing great window"
        ],
        discount: 30
    },
    {
        id: 2,
        name: "Hudson Baby",
        category: "Baby Dresser",
        image: "https://cdn.shopify.com/s/files/1/0507/0559/6600/files/91838_medium.jpg?v=1720415656",
        price: 860.00,
        condition: "Excellent",
        description: [
            "Includes a unique leatherette bumper bar that folds",
            "Ergonomic curved seat back keeps baby separate",
            "Compact shopping basket",
            "One hand 4-position recline seat",
            "Reflective harness, carry strap, rear wheel brake",
            "One hand 4-position recline seat, soft, padded seat",
            "Extendable hood with sun visor and ventilated panel",
            "360° front lockable swivel wheels, compact umbrella fold",
            "Storage pocket stroller on the hood, viewing great window"
        ],
        discount: 30
    },
    {
        id: 3,
        name: "Simple Joy",
        category: "Baby Clothes",
        image: "https://cdn.shopify.com/s/files/1/0507/0559/6600/files/132792_medium.jpg?v=1720414873",
        price: 59.99,
        condition: "Excellent",
                description: [
            "Includes a unique leatherette bumper bar that folds",
            "Ergonomic curved seat back keeps baby separate",
            "Compact shopping basket",
            "One hand 4-position recline seat",
            "Reflective harness, carry strap, rear wheel brake",
            "One hand 4-position recline seat, soft, padded seat",
            "Extendable hood with sun visor and ventilated panel",
            "360° front lockable swivel wheels, compact umbrella fold",
            "Storage pocket stroller on the hood, viewing great window"
        ],
        discount: 30
    },
    {
        id: 4,
        name: "Thule Urban Glide 2",
        category: "Prams & Strollers",
        image: "https://www.babyvillage.com.au/cdn/shop/files/107834.jpg?v=1698724985&width=800",
        price: 112.65,
        condition: "Good",
                description: [
            "Includes a unique leatherette bumper bar that folds",
            "Ergonomic curved seat back keeps baby separate",
            "Compact shopping basket",
            "One hand 4-position recline seat",
            "Reflective harness, carry strap, rear wheel brake",
            "One hand 4-position recline seat, soft, padded seat",
            "Extendable hood with sun visor and ventilated panel",
            "360° front lockable swivel wheels, compact umbrella fold",
            "Storage pocket stroller on the hood, viewing great window"
        ],
        discount: 30
    },
    {
        id: 5,
        name: "SafetyCraft",
        category: "Prams & Strollers",
        image: "https://cdn.shopify.com/s/files/1/0507/0559/6600/products/129785_medium.jpg?v=1676274399",
        price: 669.00,
        condition: "Excellent",
                description: [
            "Includes a unique leatherette bumper bar that folds",
            "Ergonomic curved seat back keeps baby separate",
            "Compact shopping basket",
            "One hand 4-position recline seat",
            "Reflective harness, carry strap, rear wheel brake",
            "One hand 4-position recline seat, soft, padded seat",
            "Extendable hood with sun visor and ventilated panel",
            "360° front lockable swivel wheels, compact umbrella fold",
            "Storage pocket stroller on the hood, viewing great window"
        ],
        discount: 30
    },
    {
        id: 6,
        name: "Bassinet Pram",
        category: "Prams & Strollers",
        image: "https://www.babyvillage.com.au/cdn/shop/files/115571_7576d19f-c80e-4b92-914c-9e76bf839216.jpg?v=1705488349&width=800",
        price: 400.00,
        condition: "Very Good",
                description: [
            "Includes a unique leatherette bumper bar that folds",
            "Ergonomic curved seat back keeps baby separate",
            "Compact shopping basket",
            "One hand 4-position recline seat",
            "Reflective harness, carry strap, rear wheel brake",
            "One hand 4-position recline seat, soft, padded seat",
            "Extendable hood with sun visor and ventilated panel",
            "360° front lockable swivel wheels, compact umbrella fold",
            "Storage pocket stroller on the hood, viewing great window"
        ],
        discount: 30
    },
    {
        id: 7,
        name: "Skip Hop Moby Bathtub",
        category: "Bath",
        image: "https://www.babyvillage.com.au/cdn/shop/products/91709.jpg?v=1639957570&width=800",
        price: 210.50,
        condition: "Excellent",
                description: [
            "Includes a unique leatherette bumper bar that folds",
            "Ergonomic curved seat back keeps baby separate",
            "Compact shopping basket",
            "One hand 4-position recline seat",
            "Reflective harness, carry strap, rear wheel brake",
            "One hand 4-position recline seat, soft, padded seat",
            "Extendable hood with sun visor and ventilated panel",
            "360° front lockable swivel wheels, compact umbrella fold",
            "Storage pocket stroller on the hood, viewing great window"
        ],
        discount: 30
    },
    {
        id: 8,
        name: "Little Dutch Baby Walker",
        category: "Playtime",
        image: "https://www.babyvillage.com.au/cdn/shop/files/132103.jpg?v=1702963536&width=800",
        price: 126.98,
        condition: "Fair",
                description: [
            "Includes a unique leatherette bumper bar that folds",
            "Ergonomic curved seat back keeps baby separate",
            "Compact shopping basket",
            "One hand 4-position recline seat",
            "Reflective harness, carry strap, rear wheel brake",
            "One hand 4-position recline seat, soft, padded seat",
            "Extendable hood with sun visor and ventilated panel",
            "360° front lockable swivel wheels, compact umbrella fold",
            "Storage pocket stroller on the hood, viewing great window"
        ],
        discount: 30
    },
    {
        id: 9,
        name: "Maxi Cosi Pria LX Car Seat",
        category: "CarSeats",
        image: "https://www.maxi-cosi.com.au/media/webp_image/catalog/product/cache/bc89655408d419bb3c735d566ce78536/m/c/mc_prialx_stone_hero_1200x1200_1.webp",
        price: 299.99,
        condition: "Excellent",
                description: [
            "Includes a unique leatherette bumper bar that folds",
            "Ergonomic curved seat back keeps baby separate",
            "Compact shopping basket",
            "One hand 4-position recline seat",
            "Reflective harness, carry strap, rear wheel brake",
            "One hand 4-position recline seat, soft, padded seat",
            "Extendable hood with sun visor and ventilated panel",
            "360° front lockable swivel wheels, compact umbrella fold",
            "Storage pocket stroller on the hood, viewing great window"
        ],
        discount: 30
    },
    {
        id: 10,
        name: "DreamBaby Brooklyn Play Pen",
        category: "Safety",
        image: "https://www.babyvillage.com.au/cdn/shop/files/100499.jpg?v=1698721960&width=2000, https://www.dreambaby.com/pub/media/catalog/product/cache/927b26b8d218a84da71302cbcbe9817c/t/e/teezed_920_l2031bb_2_.jpg",
        price: 260.99,
        condition: "Very Good",
        description: [
            "Includes a unique leatherette bumper bar that folds",
            "Ergonomic curved seat back keeps baby separate",
            "Compact shopping basket",
            "One hand 4-position recline seat",
            "Reflective harness, carry strap, rear wheel brake",
            "One hand 4-position recline seat, soft, padded seat",
            "Extendable hood with sun visor and ventilated panel",
            "360° front lockable swivel wheels, compact umbrella fold",
            "Storage pocket stroller on the hood, viewing great window"
        ],
        discount: 30
    },
];

const ProductList = () => {
    return (
        <div className='product-grid'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;