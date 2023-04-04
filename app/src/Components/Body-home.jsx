import { Navigation, Autoplay } from "swiper";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import data from '../Components/Data file/Data'

console.log(data)
export default function BodyHome() {
    const Navigate = useNavigate()
    function HandleNavigate(id) {
    Navigate(`/Details/${id}`);
    window.scrollTo(0, 0);
    }
    return(
        <article className="bodyhomearticle">
{/* !!!!!!!!!!  first swiper */}
    <div className="swiperforfashionmentext">
             <Swiper
            autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        className="mySwiperfashion-text"
        modules={[Autoplay]} 
      >
        <SwiperSlide> <h1>Man & Woman Fashion</h1> </SwiperSlide>
        <SwiperSlide> <h1>Man & Woman Fashion</h1> </SwiperSlide>
        <SwiperSlide> <h1>Man & Woman Fashion</h1> </SwiperSlide>
        <SwiperSlide> <h1>Man & Woman Fashion</h1> </SwiperSlide>
      </Swiper>
    </div>
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
        navigation={true} 
        modules={[Navigation, Autoplay]} 
    className="mySwiperBody">
        {data.slice(0, 10).map((item, index) => (
    <SwiperSlide key={index}>
    <h3 className="title-text-body">{item.name}</h3>
    <p className="price-text-body"><span className="price-span">Price </span> <sup>$</sup>{item.price}</p>
    <img className="image-body" src={item.img} alt="img"/>
    <div className="bottom-text"> 
    <p className="buynow-text" >Buy Now</p> 
    <p onClick={() => HandleNavigate(item.id)} className="seemore-text">See More</p>
    </div>
    </SwiperSlide> 
        ))}
</Swiper>
<br /><br />
</div>
{/* !!!!!!!!!! end of first swiper */}

{/* !!!!!!!!!!  second swiper */}
    <div className="swiperforfashionmentext">
             <Swiper
            autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        className="mySwiperfashion-text"
        modules={[Autoplay]} 
      >
        <SwiperSlide> <h1>Electronics</h1> </SwiperSlide>
        <SwiperSlide> <h1>Electronics</h1> </SwiperSlide>
        <SwiperSlide> <h1>Electronics</h1> </SwiperSlide>
        <SwiperSlide> <h1>Electronics</h1> </SwiperSlide>
      </Swiper>
    </div>
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
        navigation={true} 
        modules={[Navigation, Autoplay]} 
    className="mySwiperBody">
        {data.slice(11, 20).map((item, index) => (
    <SwiperSlide key={index}>
    <h3 className="title-text-body">{item.name}</h3>
    <p className="price-text-body"><span className="price-span">Price </span> <sup>$</sup>{item.price}</p>
    <img className="image-body" src={item.img} alt="img" />
    <div className="bottom-text"> 
    <p className="buynow-text" >Buy Now</p> 
    <p onClick={() => HandleNavigate(item.id)} className="seemore-text">See More</p>
    </div>
    </SwiperSlide> 
        ))}
</Swiper>
<br /><br />
</div>
{/* !!!!!!!!!!  end of second swiper */}

{/* !!!!!!!!!!  third swiper */}
    <div className="swiperforfashionmentext">
             <Swiper
            autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        className="mySwiperfashion-text"
        modules={[Autoplay]} 
      >
        <SwiperSlide> <h1>Weapon</h1> </SwiperSlide>
        <SwiperSlide> <h1>Weapon</h1> </SwiperSlide>
        <SwiperSlide> <h1>Weapon</h1> </SwiperSlide>
        <SwiperSlide> <h1>Weapon</h1> </SwiperSlide>
      </Swiper>
    </div>
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
        navigation={true} 
        modules={[Navigation, Autoplay]} 
    className="mySwiperBody">
        {data.slice(21, 30).map((item, index) => (
    <SwiperSlide key={index}>
    <h3 className="title-text-body">{item.name}</h3>
    <p className="price-text-body"><span className="price-span">Price </span> <sup>$</sup>{item.price}</p>
    <img className="image-body" src={item.img} alt="img"/>
    <div className="bottom-text"> 
    <p  className="buynow-text">Buy Now</p>
    <p onClick={() => HandleNavigate(item.id)} className="seemore-text">See More</p>
    </div>
    </SwiperSlide> 
        ))}
</Swiper>
<br /><br />
</div>
{/* !!!!!!!!!!  end of third swiper */}
        </article>
    )
}