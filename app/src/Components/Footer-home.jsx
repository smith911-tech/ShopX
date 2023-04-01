import cartdancing from '../Image/cartdancing.gif'
import emailjs, { send } from '@emailjs/browser';
import { useRef, useState } from 'react';
export default function Footer() {
     const [emailValue, setEmailValue] = useState("");
        const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('service_2w9848g', 'template_w9vw6uv', form.current, 'VXcDGbMDiLEEGa3aE')
        .then((result) => {
            console.log(result.text);
                    setEmailValue("");
        }, (error) => {
            console.log(error.text);
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail();
    };
    return(
        <>
        <img src={cartdancing} alt="" className='cartdancing'/>

        <footer className='footer-home'>
        <h1 className='logo-text'>Shop X</h1>
<div className='input-email-div'>
    <form action="" ref={form} onSubmit={handleSubmit}>
        <input type="email" name="user_email" id="" placeholder='Your Email'
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        />
        <button value={send}>SUBSCRIBE</button>
    </form>
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