import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png'
import Headersocials from './headersocials'

const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Pardis Javanmardi</h1>
                <h5 className='text-light'>A Software Engineering intern</h5>
                <CTA />
                <Headersocials />

                {/* <div className="me">
                    <img src={ME} alt="me" />
                </div> */}

                {/* <a href="#Footer" className='scroll-down'>Scroll down</a> */}
                <a href="#footer" className='scroll-down'> Scroll down</a>
            </div>
        </header>

    )
}

export default header