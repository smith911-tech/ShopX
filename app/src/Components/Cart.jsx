import HeaderCartDetails from "./Header4Cart-Details"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer-home";
import { useState } from "react";
import carticon from '../Image/Cart.gif'
import { ToastContainer, toast } from 'react-toastify';
export default function Cart(){
        const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cartItems")) || []
    );
    const Navigate = useNavigate()
    function HandleNavigate(id) {
    Navigate(`/Details/${id}`);
    window.scrollTo(0, 0);
    }
    const [quantities, setQuantities] = useState({});
    const handleIncrement = (itemId) => {
    setQuantities(prevQuantities => ({
        ...prevQuantities,
        [itemId]: Math.min((prevQuantities[itemId] || 0) + 1, 9)
    }));
    };
    
    const handleDecrement = (itemId) => {
    setQuantities(prevQuantities => ({
        ...prevQuantities,
        [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 1)
    }));
    };

        const removeItem = (id) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        toast.info('Removed Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };
    return(
        <>
        <HeaderCartDetails />
        <h1 className="Cart-carticon">Cart <img className="carticon" src={carticon} alt="" /></h1>
            {
                cartItems.map((item) => (
                    <div className="flex-cart-page" key={item.id}>
                    <img onClick={() => HandleNavigate(item.id)} src={item.img} alt="" className="img-cartside"/>
                    <div className="count-name-flex">
                        <p onClick={() => HandleNavigate(item.id)} className="namecart-page">{item.name}</p>
                        <div className="flex-remove-count">
                        <div>
                        <p>Quantity:</p>
                        <div className="count-cart">
                            <div onClick={() => handleDecrement(item.id)} className="quantity-sub"><h3 className="SubText"></h3></div>
                            <div className="count"><h3>{quantities[item.id] || 1}</h3></div>
                            <div onClick={() => handleIncrement(item.id)} className="quantity-add"><h3 className="AddText"></h3></div>
                        </div>
                        </div>
                        <div className="remove-price">
                            <button onClick={() => removeItem(item.id)} className="remove-cart">Remove</button>
                            <h3 className="price-cart"><sup>$</sup>{item.price}</h3>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                ))
            }
            <br />
            <button className="proceed-btn">Proceed To Checkout</button>
            <br /><br /><br />
            <Footer/>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        {/* Same as */}
        <ToastContainer />
        </>
    )
}