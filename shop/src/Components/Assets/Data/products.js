const products = [
    {
        id: 1,
        name: "Touched By Nature",
        category: "Baby Clothes",
        images: ["https://cdn.shopify.com/s/files/1/0507/0559/6600/files/132733_medium.jpg?v=1720414844"],
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
        images: ["https://cdn.shopify.com/s/files/1/0507/0559/6600/files/91838_medium.jpg?v=1720415656"],
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
        images: ["https://cdn.shopify.com/s/files/1/0507/0559/6600/files/132792_medium.jpg?v=1720414873"],
        price: 180.02,
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
        images: ["https://www.babyvillage.com.au/cdn/shop/files/107834.jpg?v=1698724985&width=800", 
            "https://www.thule.com/-/p/gKfet1IVQmoDsmhjIdalRrR-MJnTfHySZWdPP9_REOc/rs:fit/f:avif/cb:1.4/q:80/h:1200/w:1200/plain/approved/std.lang.all/57/75/1385775.png", 
            "https://www.thule.com/-/p/14dXkPerimG9KdsKnYnH-sLu4SsvucP8qr6tfPDkDrM/rs:fit/f:avif/cb:2.4/q:80/h:1200/w:1200/plain/approved/std.lang.all/55/88/1385588.png",
            "https://www.thule.com/-/p/x-4m2x1Bfe7rFRO2XQt_uwkVF9NLqRnAtsqfHkAeQCU/rs:fit/f:avif/cb:1.4/q:80/h:1200/w:1200/plain/approved/std.lang.all/57/76/1385776.png",
            "https://www.thule.com/-/p/w3HQI5oWEvuYwpjEKEY-Mo2E4fBM-yvTUtWcb4gpqtM/rs:fit/f:avif/cb:2.2/q:80/h:1200/w:1200/plain/approved/std.lang.all/83/92/1378392.png",
            "https://www.thule.com/-/p/hpU4bC3jOqGDzq5X3lw28bD1Vzdf9fAVys1pl53LTQU/rs:fit/f:avif/cb:2.2/q:80/h:1200/w:1200/plain/approved/std.lang.all/83/91/1378391.png",
            "https://www.thule.com/-/p/RuZ9_smX4sBs6lhQJ4yINQiwBOlk9RgtAjZhSVayBgA/rs:fit/f:avif/cb:1.6/q:80/h:1200/w:1200/plain/approved/std.lang.all/57/77/1385777.png"
        ],
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
        images: ["https://cdn.shopify.com/s/files/1/0507/0559/6600/products/129785_medium.jpg?v=1676274399"],
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
        images: ["https://www.babyvillage.com.au/cdn/shop/files/115571_7576d19f-c80e-4b92-914c-9e76bf839216.jpg?v=1705488349&width=800"],
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
        images: ["https://www.babyvillage.com.au/cdn/shop/products/91709.jpg?v=1639957570&width=800"],
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
        images: ["https://www.babyvillage.com.au/cdn/shop/files/132103.jpg?v=1702963536&width=800"],
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
        images: ["https://www.maxi-cosi.com.au/media/webp_image/catalog/product/cache/bc89655408d419bb3c735d566ce78536/m/c/mc_prialx_stone_hero_1200x1200_1.webp"],
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
        images: ["https://www.babyvillage.com.au/cdn/shop/files/100499.jpg?v=1698721960&width=2000", "https://www.dreambaby.com/pub/media/catalog/product/cache/927b26b8d218a84da71302cbcbe9817c/t/e/teezed_920_l2031bb_2_.jpg", "https://www.dreambaby.com/pub/media/catalog/product/cache/927b26b8d218a84da71302cbcbe9817c/f/2/f2031_prod-1010.jpg"],
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

export default products;