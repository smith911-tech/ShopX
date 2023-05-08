import { useNavigate } from "react-router-dom"

export default function SignUpA() {
    const navigate = useNavigate()
    function navigateSignIn(){
        navigate('/')
        window.scrollTo(0,0)
    }
    return (
        <main className="full-signdiv">
        
            <h2 className="logoname">Shop X <i className="fa-solid fa-cart-shopping fa-bounce"></i></h2>
        <div className="under-signdiv">
            <h2 className="siginText">Create an Account</h2>
        <form action="" className="form0">
            <div className="in-text">
            <div className="in-text"><label htmlFor="Password">Full Name</label>
            <input type="name" name="password" id="Password"  /></div>
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" id="Email"  />
            </div>
            <div className="in-text"><label htmlFor="Password">Password</label>
            <input type="password" name="password" id="Password"  /></div>
            <div className="in-text"><label htmlFor="Password"> Confirm Password</label>
            <input type="password" name="password" id="Password"  /></div>
            <button className="signBtn" >Sign Up</button>
            <p className="newusertell">Have an Account ? <span className="signupLogin" onClick={navigateSignIn}>Sign In</span></p>
        </form>
        </div>
        </main>
    )
}