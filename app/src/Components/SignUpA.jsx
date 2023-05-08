import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function SignUpA() {
    const [carryFullname, setcarryFullname] = useState(false)
    const [carryEmail, setcarryEmail] = useState(false)
    const [carrypassword, setcarrypassword] = useState(false)
    const [carrypasswordC, setcarrypasswordC] = useState(false)
    const [showpassword, setshowpassword] = useState(false)
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
        function showpassF() {
        setshowpassword(!showpassword)
    }
    return (
        <main className="full-signdiv">
        
            <h2 className="loginame signuploginname">Shop X <i className="fa-solid fa-cart-shopping fa-bounce"></i></h2>
        <div className="under-signdiv">
            <h2 className="siginText">Create an Account</h2>
        <form action="" className="form0">

            <div className={`in-text ${
            carryFullname ? "out-text" : "in-text"
            }`}>
            <label htmlFor="name" className="afterFullName"></label>
            <input
            type="text" 
            name="" 
            id="name"  
            onClick={carryFullNameF}
            onChange={carryFullNameF}
            /></div>

            <div className={`in-text 
            ${carryEmail ? "out-text" : "in-text"}`}>
            <label htmlFor="" className="afterEmail"></label>
            <input 
            type="email"
             name=""
            id="" 
            onClick={carryEmailF}
            onChange={carryEmailF}
            />
            </div>
            
            <div className={`in-text 
            ${carrypassword ? "out-text" : "in-text"}`}>
            <label htmlFor="Password" className="afterPassword"></label>
            <input
            type={showpassword ? "text" : "password"}
            name="password" 
            id="Password"  
            onClick={carryPassF}
            onChange={carryPassF}
            /></div>

            <div className={`in-text 
            ${carrypasswordC ? "out-text" : "in-text"}`}>
            <label htmlFor="" className="afterConfirmPassword"></label>
            <input 
            type={showpassword ? "text" : "password"} 
            name="password" 
            onChange={carryPassCF}
            onClick={carryPassCF}
            id=""  
            /></div>
            
            <div className="password-check">
            <label htmlFor="showpass" className="showpassword"></label>
            <input type="checkbox" name="" id="showpass" onClick={showpassF}/>
            </div>

            <button className="signBtn" >Sign Up</button>

            <p className="newusertell">Have an Account ? <span className="signupLogin" onClick={navigateSignIn}>Sign In</span></p>

        </form>
        </div>
        </main>
    )
}