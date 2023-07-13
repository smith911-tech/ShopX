import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {auth} from '../firebase'
import { signOut } from "firebase/auth";

export default function Header() {
    const Navigate = useNavigate()
    function SearchPageHandleClick() {
        Navigate('/SearchPage')
        window.scrollTo(0, 0);
}
    function CartPage() {
        Navigate("/Cart")
    }
        const [count, setCount] = useState(0);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCount(cartItems.length);
    }, []);
    function signout() {
        signOut(auth).then(() => {
            Navigate('/')
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
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
                <h3><span className="position-icon">
                    <i onClick={CartPage} className="fa-solid fa-cart-shopping"></i>{count > 0 &&<span className="number-icon-cart">{count}</span>}</span></h3>
                <h3><i class="fa-solid fa-user"></i></h3>
            </div>
        <div className="Img-cart-search">
            <div className="flex-header">
            <article className="search-button">
                <input 
                type="search" 
                name="" 
                id=""
                onClick={SearchPageHandleClick}
                placeholder="Search Products"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </article>
            <div className='cart-account-home'>
                
                <h3 onClick={CartPage}><span className="position-icon"><i className="fa-solid fa-cart-shopping"></i> {count > 0 &&<span className="number-icon-cart">{count}</span>} </span> </h3>
                <h3 onClick={signout} className="account-text"><i class="fa-solid fa-user"></i>  Account</h3>
            </div>
            </div>
        </div>
        </header>
        
    )
}