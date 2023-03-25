import axios from "axios"
import { Navigation, Autoplay } from "swiper";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


export default function BodyHome() {
    const [ProductData, Setproductdata] = useState([])
    return(
        <article className="bodyhomearticle">
<div className="swiper1div">
        <Swiper
            autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
    slidesPerView={1}
    spaceBetween={10}
    breakpoints={{
    "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
    },
    }}
        navigation={false} 
        modules={[Navigation, Autoplay]} 
    className="mySwiperBody">
        {/* {ProductData.slice(0, 39).map((item, index) => (
    <SwiperSlide key={index}>
    <h3 className="title-text-body">{item.title}</h3>
    <p className="price-text-body"><span className="price-span">Price</span> $ {item.price}</p>
    <img className="image-body" src={item.category.image} alt=""/>
    </SwiperSlide> 
        ))} */}
    
</Swiper>
<br /><br />
</div>
        </article>
    )
}