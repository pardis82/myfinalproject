import React from 'react'
import './contacts.css'
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




const contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_v352hwq', 'template_q93i04p', e.target, { // Use e.target here
                publicKey: 'sFgXooNUXFuyLFIVF',
            });
        e.target.reset() // Reset the form after sending the email
    };

    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>Contact me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdEmail className='contact__option-icon' />
                        <h4>Gmail</h4>
                        <h5>pardis.javanmardi82@gmail.com</h5>
                        <a href="mailto:pardis.javanmardi82@gmail.com" target='_blank'>via Gmail</a>
                    </article>

                    <article className="contact__option">
                        <FaTelegram className='contact__option-icon' />
                        <h4>Telegram</h4>
                        <h5>@itsprds</h5>
                        <a href="https://t.me/itsprds" target='_blank'>via Telegram</a>
                    </article>

                    {/*<article className="contact__option">
                        <IoLogoWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+21939-----</h5>
                        <a href="https://api.whatsapp.com/send?phone-+219391917391" target='_blank'>via WhatsApp</a>
                    </article>*/}
                </div>
                {/* End of contact options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your full name' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                    <button className='btn btn-primary' type="submit">send message</button>
                </form>
            </div>
        </section>
    )
}

export default contacts