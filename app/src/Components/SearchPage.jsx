import { useNavigate } from "react-router-dom"
import data from './Data file/Data'
import {useState, useEffect} from 'react'
import Footer from "./Footer-home"
export default function SearchPage(){
    const [InputValue, setInputValue] = useState('')
    const [SearchData, setSearchData] = useState([])
    const Navigate = useNavigate()
    function BacktoHomepage() {
        Navigate('/Mainapp')
        window.scrollTo(0, 0);
    }
    function CartPage() {
        Navigate("/Cart")
    }
    const handleSearch = () => {
    const filtered = data.filter(item => item.category === InputValue.toLowerCase());
    setSearchData(filtered);
    }
    function HandleNavigate(id) {
    Navigate(`/Details/${id}`);
    window.scrollTo(0, 0);
    }
    const [count, setCount] = useState(0);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCount(cartItems.length);
    }, []);

    function getSuggestions() {
    const regex = new RegExp(`${InputValue}`, "i");
    return  data.filter((item) => regex.test(item.category)).slice(0, 5);
  }
    return(
        
        <>
        <div className="search-page-flows">
            <h2> <i onClick={BacktoHomepage} class="fa-solid fa-arrow-left fa-beat"></i></h2>
                <div className='cart-account-home display-none-cart colori'>
                <h3><span className="position-icon" onClick={CartPage}><i className="fa-solid fa-cart-shopping"></i>{count > 0 &&<span className="number-icon-cart">{count}</span>}</span></h3>
                <h3><i class="fa-solid fa-user"></i></h3>
            </div>

            <div className="flex-header">
            <article className="search-button searchPageinput">
                <input 
                type="search" 
                name="" 
                id=""
                placeholder="Search Products"
                value={InputValue}
                onClick={handleSearch}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>
                        {InputValue && (
            <ul className="absolute bg-white w-full  shadow-xl">
                {getSuggestions().length === 0 ? (
                <li>No results found</li>
                ) : (
                getSuggestions().map((data) => (
                    <li
                    className="capitalize ml-4 mt-3 mb-3 cursor-pointer w-full"
                    key={data.key}
                    >
                    {data.category}
                    </li>
                ))
                )}
            </ul>
            )}
            </article>
            <div className='cart-account-home colori change-cartcolor-plusaccount-color'>
                <h3><span className="position-icon"><i className="fa-solid fa-cart-shopping"></i>{count > 0 &&<span className="number-icon-cart">{count}</span>}</span></h3>
                <h3><i class="fa-solid fa-user"></i></h3>
            </div>
            </div>
</div>
        <article className="search-items-carrier">
            {SearchData.map(item => (
            <div key={item.id} className="Search-div-carrier" onClick={() => HandleNavigate(item.id)}>
            <img className="img-searchside" src={item.img} alt="" />
            <div className="name-price">
            <h3>{item.name}</h3>
            <p className="price-search"><sup>$</sup>{item.price}</p>
            <p className="addtocartsearch">Buy Now</p>
            </div>
            </div>
            ))}
            </article>
    <div className="pushfooterdown"></div>
            <Footer />
        </>
    )
}