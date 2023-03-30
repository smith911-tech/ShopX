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
       <h2>{data.name}</h2>
        </>
    )
}