import React from 'react'
import './footer.css'

const footer = () => {
    return (
        <section id='footer'>
            <footer>
                <a href="#" className='footer-logo'>Pardis</a>

                <ul className='permalink'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contacts</a></li>
                </ul>
                <div className="footer__copyright">
                    <small>&copy; all rights reservd to EGATOR Tutorials</small>
                </div>
                {/* <div className="footer__socials">
            <a href=""></a>
        </div> */}
            </footer>
        </section>

    )
}

export default footer