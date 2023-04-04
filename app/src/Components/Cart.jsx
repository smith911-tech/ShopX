import HeaderCartDetails from "./Header4Cart-Details"
import { useNavigate } from "react-router-dom";
export default function Cart(){
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
    const Navigate = useNavigate()
    function HandleNavigate(id) {
    Navigate(`/Details/${id}`);
    window.scrollTo(0, 0);
    }
    return(
        <>
        <HeaderCartDetails />
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
                            <div className="quantity-add"><h3>+</h3></div>
                            <div className="count"><h3>4</h3></div>
                            <div className="quantity-sub"><h3>-</h3></div>
                        </div>
                        </div>
                    <p className="remove-cart">Remove</p>
                        </div>
                    </div>
                    <h3 className="price-cart"><sup>$</sup>{item.price}</h3>
                    </div>
                ))
            }
        </>
    )
}