import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function SignIn() {
    // ! states
    const [carryname, setcarryname] = useState(false)
    const [carrypass, setcarrypass] = useState(false)
    const [showpassword, setshowpassword] = useState(false)
    // ? end of states
        const navigate = useNavigate()
    function navigateSignup(){
        navigate('/SignUp')
            window.scrollTo(0,0)
    } 
    function navigateForgetpass(){
        navigate('/Forgetpass')
        window.scrollTo(0,0)
    }
    function  carrytextF() {
        setcarryname(true)
    }
    function  carrypassF() {
        setcarrypass(true)
    }
    function showpassF() {
        setshowpassword(!showpassword)
    }
    return (
        <main className="full-signdiv">
            <h2 className="loginame">Shop X <i className="fa-solid fa-cart-shopping fa-bounce"></i></h2>
        <div className="under-signdiv">
            <h2 className="siginText">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></h2>
        <form action="" className="form0">

            <div className={`in-text ${
            carryname ? "out-text" : "in-text"
            }`}>
            <label htmlFor="Email" className="afterEmail"></label>
            <input 
             type="email"
              name="email" 
              id="Email"  
              onClick={carrytextF}
              onChange={carrytextF}
              />
            </div>

            <div className={`in-text ${
            carrypass ? "out-text" : "in-text"
            }`}><label htmlFor="Password" className="afterPassword"></label>
            <input 
            type={showpassword ? "password" : "text"} 
            name="password" 
            id="Password"  
            onClick={carrypassF}
            onchange={carrypassF}
            /></div>

            <div className="password-check">
            <label htmlFor="showpass" className="showpassword"></label>
            <input type="checkbox" name="" id="showpass" onClick={showpassF}/>
            </div>

            <button className="signBtn">Login</button>

            <p className="forgotpass" onClick={navigateForgetpass}>Forgot Password ?</p>

            <p className="newusertell">New User ? <span className="signupLogin" onClick={navigateSignup}>Sign Up</span></p>
        </form>
        </div>
        </main>
    )
}