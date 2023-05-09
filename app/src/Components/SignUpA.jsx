import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from "../firebase"
export default function SignUpA() { 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Confirmpassword, setConfirmPassword] = useState("")
    const [Fullname, setFullname] = useState("")
    const [error, seterror] = useState("")
    const [carrier, setcarrier] = useState(false)
    const [showpassword, setshowpassword] = useState(false)
    const navigate = useNavigate()
    function navigateSignIn(){
        navigate('/')
        window.scrollTo(0,0)
    }
    function carrierF(){
    setcarrier(true)
    }
    function showpassF(){
        setshowpassword(!showpassword)
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || Confirmpassword === ""  || Fullname === "") {
      seterror('Please fill in all fields');
    } else if (password !== Confirmpassword) {
      seterror('Passwords do not match');
    } else if (password.length < 8) {
      seterror('Password must be at least 6 characters');
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
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
  };
    return (
        <main className="full-signdiv">
        
            <h2 className="loginame signuploginname">Shop X <i className="fa-solid fa-cart-shopping fa-bounce"></i></h2> 
        <div className="under-signdiv">
            <h2 className="siginText">Create an Account</h2>
        <form action="" className="form0">

            <div className={`in-text ${
            carrier ? "out-text" : "in-text"
            }`}>
            <label htmlFor="name" className="afterFullName"></label>
            <input
            type="text" 
            name="" 
            id="name"  
            onClick={carrierF}
            value={Fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            /></div>

            <div className={`in-text 
            ${carrier ? "out-text" : "in-text"}`}>
            <label htmlFor="" className="afterEmail"></label>
            <input 
            type="email"
             name=""
            id="" 
            value={email}
            onClick={carrierF}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            </div>
            
            <div className={`in-text 
            ${carrier ? "out-text" : "in-text"}`}>
            <label htmlFor="Password" className="afterPassword"></label>
            <input
            type={showpassword ? "text" : "password"}
            name="password" 
            id="Password"  
            value={password}
            onClick={carrierF}
            onChange={(e) => setPassword(e.target.value)}
            required
            /></div>

            <div className={`in-text 
            ${carrier ? "out-text" : "in-text"}`}>
            <label htmlFor="" className="afterConfirmPassword"></label>
            <input 
            type={showpassword ? "text" : "password"} 
            name="password" 
            onClick={carrierF}
            value={Confirmpassword}
            id=""  
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            /></div>
            
            <div className="password-check">
            <label htmlFor="showpass" className="showpassword"></label>
            <input type="checkbox" name="" id="showpass" onClick={showpassF}/>
            </div>
            
            {error && <p className="errorsignup">{error}</p>}

        <button className="signBtn" onClick={handleSubmit}>Sign Up</button>

            <p className="newusertell">Have an Account ? <span className="signupLogin" onClick={navigateSignIn}>Sign In</span></p>

        </form>


        </div>
        </main>
    )
}