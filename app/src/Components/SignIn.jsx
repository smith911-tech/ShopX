import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth"
export default function SignIn() {
    // ! states
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [carrier, setcarrier] = useState(false)
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
    function  carrierF() {
        setcarrier(true)
    }
    function showpassF() {
        setshowpassword(!showpassword)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (email === "" || password === "") {
            alert('Please fill in all fields');
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/Mainapp');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
    }
    return (
        <main className="full-signdiv">
            <h2 className="loginame">Shop X <i className="fa-solid fa-cart-shopping fa-bounce"></i></h2>
        <div className="under-signdiv siginpageunderdiv">
            <h2 className="siginText">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></h2>
        <form action="" className="form0">

            <div className={`in-text ${
            carrier ? "out-text" : "in-text"
            }`}>
            <label htmlFor="Email" className="afterEmail"></label>
            <input 
             type="email"
              name="email" 
              id="Email"  
              onClick={carrierF}
              onChange={(e)=>setemail(e.target.value)}
              value={email}
              />
            </div>

            <div className={`in-text ${
            carrier ? "out-text" : "in-text"
            }`}><label htmlFor="Password" className="afterPassword"></label>
            <input 
            type={showpassword ? "password" : "text"} 
            name="password" 
            id="Password"  
            onClick={carrierF}
            onChange={(e)=>setpassword(e.target.value)}
            value={password}
            /></div>

            <div className="password-check">
            <label htmlFor="showpass" className="showpassword"></label>
            <input type="checkbox" name="" id="showpass" onClick={showpassF}/>
            </div>

            <button className="signBtn" onClick={handleSubmit}>Login</button>

            <p className="forgotpass" onClick={navigateForgetpass}>Forgot Password ?</p>

            <p className="newusertell">New User ? <span className="signupLogin" onClick={navigateSignup}>Sign Up</span></p>
        </form>
        </div>
        </main>
    )
}