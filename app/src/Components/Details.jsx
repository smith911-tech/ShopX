import React, {useState, useEffect} from "react"
import Data from '../Components/Data file/Data'
import { useParams } from "react-router-dom"
export default function Details() {
    const {id} = useParams()
    const [data, setData] =useState([]);
    useEffect(() => {
    const data = Data.find((_data) => String(_data.id) === id);   
    if (data) {
    setData(data);
    }
    }, [id]);
    return(
        <>
        <div>
        <div className="details-header">
        <h3>ShopX</h3>
        </div>
        </div>
        <main className="padding-main-details">
            <div className="div-img-carrier-details-page">
                <aside className="aside-img-clickable">
                <a href="#img1"><img src={data.img} alt="img" /></a>
                <a href="#img2"><img src={data.img2} alt="img" /></a>
                <a href="#img3"><img src={data.img3} alt="img" /></a>
                <a href="#img4"><img src={data.img4} alt="img" /></a>
                <a href="#img5"><img src={data.img5} alt="img" /></a>
                </aside>
                <div className="flex-tagsimg">
                <img id="img1" src={data.img} alt="img" />
                <img id="img2" src={data.img2} alt="img" />
                <img id="img3" src={data.img3} alt="img" />
                <img id="img4" src={data.img4} alt="img" />
                <img id="img5" src={data.img5} alt="img" />
                </div>
            </div>
            <aside className="namedescprice-details">
                <h3  className="namedata-details">{data.name}</h3>
                <h3  className="pricedata-details"><sup>$</sup>{data.price}</h3>
                <p className="descdata-details">{data.desc}</p>
            </aside>

            <aside className="price-addtocart-buynow">
                <h3 className="price-cartside-buyside"><sup>$</sup>{data.price}</h3>
                <div className="btns-cartside">
                    <button className="addtocart">Add To Cart</button>
                    <button className="buytocart">Buy Now</button>
                </div>
            </aside>
        </main>
        </>
    )
}