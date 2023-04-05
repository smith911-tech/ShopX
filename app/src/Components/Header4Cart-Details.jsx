import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
export default function HeaderCartDetails() {''
    const Navigate = useNavigate()
        function BacktoHomepage() {
        Navigate('/')
        window.scrollTo(0, 0);
    }
    function CartPage() {
        Navigate("/Cart")
        window.scrollTo(0, 0);
    }
    const [count, setCount] = useState(0);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCount(cartItems.length);
    }, []);
    return(
    <>
        <div className="details-header">
        <h3 className="shopxdetailsheader">ShopX</h3>
        <h3><span className="position-icon detail-arrange-header" onClick={CartPage}>
        <i className="fa-solid fa-cart-shopping"></i> {count > 0 &&<span className="number-icon-cart">{count}</span>}</span></h3>
        </div>
        <h2 className="beat-detailsbackicon"> <i onClick={BacktoHomepage} class="fa-solid fa-arrow-left fa-beat"></i></h2>
        </>
    )
}