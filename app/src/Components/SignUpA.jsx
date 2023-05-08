import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function SignUpA() {
    const [carryFullname, setcarryFullname] = useState(false)
    const [carryEmail, setcarryEmail] = useState(false)
    const [carrypassword, setcarrypassword] = useState(false)
    const [carrypasswordC, setcarrypasswordC] = useState(false)
    const navigate = useNavigate()
    function navigateSignIn(){
        navigate('/')
        window.scrollTo(0,0)
    }
    function carryFullNameF(){
        setcarryFullname(true)
    }
        function carryEmailF(){
        setcarryEmail(true)
    }
        function carryPassF(){
        setcarrypassword(true)
    }
        function carryPassCF(){
        setcarrypasswordC(true)
    }
    return (
        <main className="full-signdiv">
        
            <h2 className="logoname">Shop X <i className="fa-solid fa-cart-shopping fa-bounce"></i></h2>
        <div className="under-signdiv">
            <h2 className="siginText">Create an Account</h2>
        <form action="" className="form0">

            <div className={`in-text ${
            carryFullname ? "out-text" : "in-text"
            }`}>
            <label htmlFor="name">Full name</label>
            <input
            type="text" 
            name="" 
            id="name"  
            onClick={carryFullNameF}
            /></div>

            <div className={`in-text 
            ${carryEmail ? "out-text" : "in-text"}`}>
            <label htmlFor="">Email</label>
            <input 
            type="email"
             name=""
            id="" 
            onClick={carryEmailF}
            />
            </div>
            
            <div className={`in-text 
            ${carrypassword ? "out-text" : "in-text"}`}>
            <label htmlFor="Password">Password</label>
            <input
            type="password" 
            name="password" 
            id="Password"  
            onClick={carryPassF}
            /></div>

            <div className={`in-text 
            ${carrypasswordC ? "out-text" : "in-text"}`}>
            <label htmlFor="">Confirm Password</label>
            <input 
            type="password" 
            name="password" 
            id=""  
            onclick={carryPassCF}
            /></div>

            <button className="signBtn" >Sign Up</button>

            <p className="newusertell">Have an Account ? <span className="signupLogin" onClick={navigateSignIn}>Sign In</span></p>

        </form>
        </div>
        </main>
    )
}