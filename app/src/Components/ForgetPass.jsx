import { useNavigate } from "react-router-dom"

export default function ForgetPassword() {
    const navigate = useNavigate()
    function navigateSignIn(){
        navigate('/')
            window.scrollTo(0,0)
    }
    return (
        <main className="full-signdiv">
            <h2 className="logoname">Shop X <i className="fa-solid fa-cart-shopping fa-bounce"></i></h2>
        <div className="under-signdiv">
            <h2 className="siginText">Forgot Password </h2>
        <form action="" className="form0">
            <div className="in-text">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" id="Email"  />
            </div>
            <button className="signBtn">Login</button>
            <p className="newusertell">Remember Password ? <span className="signupLogin" onClick={navigateSignIn}>Sign In</span></p>
        </form>
        </div>
        </main>
    )
}