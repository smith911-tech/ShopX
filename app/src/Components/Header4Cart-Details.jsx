import { useNavigate } from "react-router-dom"
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
    return(
    <>
        <div className="details-header">
        <h3 className="shopxdetailsheader">ShopX</h3>
        <h3><span className="position-icon detail-arrange-header" onClick={CartPage}>
        <i className="fa-solid fa-cart-shopping"></i> <span className="number-icon-cart">0</span></span></h3>
        </div>
        <h2 className="beat-detailsbackicon"> <i onClick={BacktoHomepage} class="fa-solid fa-arrow-left fa-beat"></i></h2>
        </>
    )
}