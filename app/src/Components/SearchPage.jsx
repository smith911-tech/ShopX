import { useNavigate } from "react-router-dom"
import data from './Data file/Data'
import {useState} from 'react'
import Footer from "./Footer-home"
export default function SearchPage(){
    const [InputValue, setInputValue] = useState('')
    const [SearchData, setSearchData] = useState([])
    const Navigate = useNavigate()
    function BacktoHomepage() {
        Navigate('/')
    }
    const handleSearch = () => {
    const filtered = data.filter(item => item.category === InputValue);
    setSearchData(filtered);
    }
    return(
        
        <>
        <div className="search-page-flows">
            <h2> <i onClick={BacktoHomepage} class="fa-solid fa-arrow-left fa-beat"></i></h2>
                <div className='cart-account-home display-none-cart colori'>
                <h3><i className="fa-solid fa-cart-shopping"></i></h3>
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
                onChange={(e) => setInputValue(e.target.value)}
                />
                <i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>
            </article>
            <div className='cart-account-home colori'>
                <h3 className=""><i className="fa-solid fa-cart-shopping"></i>  Cart</h3>
                <h3><i class="fa-solid fa-user"></i>  Account</h3>
            </div>
            </div>
</div>
            {SearchData.map(item => (
            <div key={item.id}>
            <div className="Search-div-carrier">
            <img src={item.img} alt="" />
            <div className="name-price">
            <h3>{item.name}</h3>
            <p><sup>$</sup>{item.price}</p>
            </div>
            </div>
            </div>
            ))}
    <div className="pushfooterdown"></div>
            <Footer />
        </>
    )
}