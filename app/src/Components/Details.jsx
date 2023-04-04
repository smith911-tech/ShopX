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
    const handleImageClick1 = () => {
    document.getElementById("myid1").scrollIntoView({ behavior: "smooth" });
    };
    const handleImageClick2 = () => {
    document.getElementById("myid2").scrollIntoView({ behavior: "smooth" });
    };
    const handleImageClick3 = () => {
    document.getElementById("myid3").scrollIntoView({ behavior: "smooth" });
    };
    const handleImageClick4 = () => {
    document.getElementById("myid4").scrollIntoView({ behavior: "smooth" });
    };
    const handleImageClick5 = () => {
    document.getElementById("myid5").scrollIntoView({ behavior: "smooth" });
    };
    return(
        <>
        <div className="details-header">
        <h3>ShopX</h3>
        <h3><span className="position-icon detail-arrange-header">
        <i className="fa-solid fa-cart-shopping"></i> <span className="number-icon-cart">0</span></span></h3>
        </div>
        <main className="padding-main-details">
            <div className="div-img-carrier-details-page">
                <aside className="aside-img-clickable">
                <img onClick={handleImageClick1} src={data.img} />
                <img onClick={handleImageClick2} src={data.img2} />
                <img onClick={handleImageClick3} src={data.img3} />
                <img onClick={handleImageClick4} src={data.img4} />
                <img onClick={handleImageClick5} src={data.img5} />
                </aside>
                <div className="flex-tagsimg">
                <img id="myid1" src={data.img} />
                <img id="myid2" src={data.img2} />
                <img id="myid3" src={data.img3} />
                <img id="myid4" src={data.img4} />
                <img id="myid5" src={data.img5} />
                </div>
            </div>
            <aside className="namedescprice-details">
                <h3  className="namedata-details">{data.name}</h3>
                <h3  className="pricedata-details"><sup>$</sup>{data.price}</h3>
                <hr />
                <h3>Description:</h3>
                <p className="descdata-details">{data.desc}</p>
            </aside>

            <aside className="price-addtocart-buynow">
                <h3 className="price-cartside-buyside"><sup>$</sup>{data.price}</h3>
                <hr />
                <div className="btns-cartside">
                    <button className="addtocart">Add To Cart</button>
                    <button className="buytocart">Buy Now</button>
                    <div className="ad-div1">
                    <a href="https://indomie.ng/">
                    <img className="ad1" src="https://th.bing.com/th/id/R.deeee01e726f182766c082d8b1fcf6fc?rik=ri8TyFhDYgelvw&pid=ImgRaw&r=0" alt="" />
                    <p>Ad</p>
                    </a>
                    </div>
                </div>
            </aside>
        </main>
        </>
    )
}