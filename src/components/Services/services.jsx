import React from 'react'
import './services.css'
import { IoIosCheckmark } from "react-icons/io";

const services = () => {
    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX</h3>
                    </div>
                    <ul className='services__list'>
                        <li>
                            <IoIosCheckmark className='services__list-icon' />
                            {/* <p>Lorem ipsum dolor sit amet.</p>*/}
                            <p>Making wireframes with Balsamiq.</p>
                        </li>
                        <li>
                            <IoIosCheckmark className='services__list-icon' />
                            <p>Familiarity with making wireframes with figma.</p>
                        </li>
                        {/*<li>
                            <IoIosCheckmark className='services__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <IoIosCheckmark className='services__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>*/}
                    </ul>
                </article>

                {/* end of ui/ux services */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Developement</h3>
                    </div>
                    <ul className='services__list'>
                        <li>
                            <IoIosCheckmark className='services__list-icon' />
                            <p>Responsive and minimalstic websites</p>
                        </li>
                        <li>
                            <IoIosCheckmark className='services__list-icon' />
                            <p>Free hosting</p>
                        </li>
                        {/*<li>
                            <IoIosCheckmark className='services__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <IoIosCheckmark className='services__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>*/}
                    </ul>
                </article>

                {/* end of web developement services */}

                <article className="service">
                    <div className="service__head">
                        <h3>Backend</h3>
                    </div>
                    <ul className='services__list'>
                        <li>
                            <IoIosCheckmark className='services__list-icon' />
                            <p>A familiarity with Database concepts.</p>
                        </li>
                        {/*<li>
                            <IoIosCheckmark className='services__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>*/}
                    </ul>
                </article>

                {/* end of backend services */}
            </div>
        </section>
    )
}

export default services