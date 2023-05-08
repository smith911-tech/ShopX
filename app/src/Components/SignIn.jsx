import { useNavigate } from "react-router-dom"

export default function SignIn() {
        const navigate = useNavigate()
    function navigateSignup(){
        navigate('/SignUp')
            window.scrollTo(0,0)
    } 
    function navigateForgetpass(){
        navigate('/Forgetpass')
       window.scrollTo(0,0)
    }
    return (
        <main className="full-signdiv">
            <h2 className="logoname">Shop X <i className="fa-solid fa-cart-shopping fa-bounce"></i></h2>
        <div className="under-signdiv">
            <h2 className="siginText">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></h2>
        <form action="" className="form0">
            <div className="in-text">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" id="Email"  />
            </div>
            <div className="in-text"><label htmlFor="Password">Password</label>
            <input type="password" name="password" id="Password"  /></div>
            <button className="signBtn">Login</button>
            <p className="forgotpass" onClick={navigateForgetpass}>Forgot Password ?</p>
            <p className="newusertell">New User ? <span className="signupLogin" onClick={navigateSignup}>Sign Up</span></p>
        </form>
        </div>
        </main>
    )
}