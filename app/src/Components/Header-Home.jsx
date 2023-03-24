import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
export default function Header() {
    return(
        <header className="Home-header">
            <div className="Div-underhome">
                <h3> 
                    Best Quality Wears
                </h3>
                <h3>
                    Good Quality 
                </h3>
                <h3>
                    100% Orignal
                </h3>
                <h3>
                    Custommer Care
                </h3>
            </div>
            <h1 className="logo-text">ShopX</h1>
            <div className='cart-account-home display-none-cart'>
                <h3><i className="fa-solid fa-cart-shopping"></i></h3>
                <h3><i class="fa-solid fa-user"></i></h3>
            </div>
        <div className="Img-cart-search">
            <div className="flex-header">
            <article className="search-button">
                <input 
                type="search" 
                name="" 
                id=""
                placeholder="Search Products"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </article>
            <div className='cart-account-home'>
                <h3><i className="fa-solid fa-cart-shopping"></i>  Cart</h3>
                <h3><i class="fa-solid fa-user"></i>  Account</h3>
            </div>
            </div>
    <Swiper
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        style={{
        "--swiper-navigation-size": "25px",
        }}
        navigation={true} 
        modules={[Navigation, Autoplay]} 
        className="mySwiperhome">
        <SwiperSlide>The best Online Store in Africa
        <button>Order Now</button>
        </SwiperSlide>
        <SwiperSlide>Enjoy a seamless shopping experience
        <button>Order Now</button>
        </SwiperSlide>
        <SwiperSlide>Discover a wide selection of products from trusted brands
        <button>Order Now</button>
        </SwiperSlide>
        <SwiperSlide>Start browsing now and indulge in the ultimate shopping experience!
        <button>Order Now</button>
        </SwiperSlide>
    </Swiper>
        </div>
        </header>
    )
}