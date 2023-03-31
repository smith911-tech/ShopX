import React, {useState, useEffect, useRef} from "react"
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
        <div>
        <div className="details-header">
        <h3>ShopX</h3>
        </div>
        </div>
        <main className="padding-main-details">
            <div className="div-img-carrier-details-page">
                <aside className="aside-img-clickable">
                <img onClick={handleImageClick1} src={data.img} alt="img" />
                <img onClick={handleImageClick2} src={data.img2} alt="img" />
                <img onClick={handleImageClick3} src={data.img3} alt="img" />
                <img onClick={handleImageClick4} src={data.img4} alt="img" />
                <img onClick={handleImageClick5} src={data.img5} alt="img" />
                </aside>
                <div className="flex-tagsimg">
                <img id="myid1" src={data.img} alt="img" />
                <img id="myid2" src={data.img2} alt="img" />
                <img id="myid3" src={data.img3} alt="img" />
                <img id="myid4" src={data.img4} alt="img" />
                <img id="myid5" src={data.img5} alt="img" />
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
                <div className="btns-cartside">
                    <button className="addtocart">Add To Cart</button>
                    <button className="buytocart">Buy Now</button>
                </div>
            </aside>
        </main>
        </>
    )
}