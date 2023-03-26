import cartdancing from '../Image/cartdancing.gif'

export default function Footer() {
    return(
        <>
        <img src={cartdancing} alt="" className='cartdancing'/>

        <footer className='footer-home'>
        <h1 className='logo-text'>Shop X</h1>
<div className='input-email-div'>
        <input type="email" name="" id=""  placeholder='Your Email'/>
        <button>SUBSCRIBE</button>
</div>
<div className='under-subscribe-footer'>
    <p>Best Sellers</p>
    <p>Gift Ideas</p>
    <p>New Releases</p>
    <p>Today's Deals</p>
    <p>Customer Service</p>
</div>
<p className='helpline'>Help Line Number : <a href="tel:">+2349036154481</a></p>
<p className='copy-name'>&copy;2023 Done By Williams Joseph</p>
        </footer>
<br /><br /><br /><br />
        </>
    )
}