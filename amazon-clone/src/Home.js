import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>

            <div className="home__row">
                
                <Product 
                    id="12321348"
                    title="Redragon M602 RGB Wired Gaming Mouse RGB Spectrum Backlit Ergonomic Mouse Griffin Programmable with 7 Backlight"
                    price={21.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61MI2KPnKgL._AC_SL1500_.jpg"
                />
                <Product 
                    id="12321349"
                    title="ONIKUMA PS4 Headset -Gaming Headset Xbox one Headset Gaming Headphone with Surround Sound, RGB LED Light & Noise Canceling Microphone for PS4"
                    price={24.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71wbtbhgPbL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12321344"
                    title="BingoFit Fitness Tracker, Smart Watch Water Resistant Activity Tracker"
                    price={41.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51xUPrNrxtL._AC_SL1000_.jpg"
                />
                <Product 
                    id="12321345"
                    title="
                    Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SL1000_.jpg"
                />
                <Product 
                    id="12321341"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12321346"
                    title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                />
            </div>
            <div className="home__row">
            <Product 
                    id="12321342"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="12321343"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
