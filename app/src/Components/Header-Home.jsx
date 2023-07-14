import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import React, {  useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import backGrounImg from '../Image/headerimage.png'

export default function Header(searchInput) {
    const Navigate = useNavigate()
    function CartPage() {
        Navigate("/Cart")
    }
    const [count, setCount] = useState(0);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCount(cartItems.length);
    }, []);
    return (
        <header className="Home-header">
            <div className={`${searchInput ? "Div-underhome" : "hidden"} `}>
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
            <h1 className={`${searchInput ? "display logo-text" : "hidden"}`}>ShopX</h1>
            <div className='cart-account-home display-none-cart'>
                <h3><span className="position-icon">
                    <i onClick={CartPage} className="fa-solid fa-cart-shopping"></i>{count > 0 && <span className="number-icon-cart">{count}</span>}</span></h3>
                <h3><i  class="fa-solid fa-user"></i></h3>
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

                        <h3 onClick={CartPage}><span className="position-icon"><i className="fa-solid fa-cart-shopping"></i> {count > 0 && <span className="number-icon-cart">{count}</span>} </span> </h3>
                        <h3  className="account-text"><i class="fa-solid fa-user"></i> Account</h3>
                    </div>
                </div>
                        <div className="bg-header">
                            <img src={backGrounImg} alt="" />
                        </div>
            </div>
        </header>

    )
}