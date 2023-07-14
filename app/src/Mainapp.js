import BodyHome from "./Components/Body-home"
import Header from "./Components/Header-Home"
import Footer from "./Components/Footer-home"
import { useState } from "react"
export default function Mainapp() {
    const [searchInput, setSearchInput] = useState(true)
    function handleSearch(){
        setSearchInput(false)
    }
    function handleBack(){
        setSearchInput(true)
    }
    return(
        <>
        <Header searchInput={searchInput} handleBack={handleBack} handleSearch={handleSearch}/>
        <BodyHome searchInput={searchInput}/>
        <Footer searchInput={searchInput}/>
        </>
    )
}