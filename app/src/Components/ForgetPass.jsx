import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function ForgetPassword() {
    const [carryFemail, setcarryFemail] = useState(false)
    function carryEmailF(){
        setcarryFemail(true)
    }
    const navigate = useNavigate()
    function navigateSignIn(){
        navigate('/')
            window.scrollTo(0,0)
    }
    return (
        <main className="full-signdiv"> 

            <h2 className="loginame ">Shop X <i className="fa-solid fa-cart-shopping fa-bounce"></i></h2>

        <div className="under-signdiv forgetpassunder-signdiv">
            <h2 className="siginText">Forgot Password </h2>

        <form action="" className="form0">

            <div className={`in-text ${carryFemail ? "out-text" : "in-text"}`}>
            <label htmlFor="Email" className="afterEmail"></label>
            <input 
            type="email" 
            name="email" 
            id="Email"  
            onClick={carryEmailF}
            onChange={carryEmailF}
            />
            </div>

            <button className="signBtn">Reset Password</button>

            <p className="newusertell">Remember Password ? <span className="signupLogin" onClick={navigateSignIn}>Sign In</span></p>
        </form>
        </div>
        </main>
    )
}