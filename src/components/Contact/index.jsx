import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './index.css';
import 'animate.css';

const Contact = () => {
    const refForm = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'gmail', 
                'template_fc1kjnc', 
                refForm.current, 
                'YWgOjgDC0nUb-bMkX' 
            )
            .then((result) => {
                alert('Message Sent Successfully!');
                window.location.reload(false)
            }, (error) => {
                alert('An error occurred, please try again later.');
            });
    };

    return (
        <div className="app-container">
            <div className="container contact-form">
                <h1 className="header">Contact Me</h1>
                <p className="paraCon">
                    I'm interested in freelancing opportunities. However, if you have other requests or questions, don't
                    hesitate to contact me through the form below.
                </p>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className="half">
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input type="text" name="subject" placeholder="Subject" required />
                        </li>
                        <li>
                            <textarea name="message" placeholder="Message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default Contact;
