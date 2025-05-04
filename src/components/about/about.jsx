import React from 'react'
import './about.css'
import ME from '../../assets/my photo white t.jpg'
import { LiaAwardSolid } from "react-icons/lia";
import { FaUsersGear } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me image">
                        <img src={ME} alt="about image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <LiaAwardSolid className='about__icon' />
                            <h5>Experience</h5>
                            <small>4+ years of teaching English</small>
                        </article>

                        <article className='about__card'>
                            <FaUsersGear className='about__icon' />
                            <h5>Clients</h5>
                            <small>Pars language school</small>
                        </article>

                        <article className='about__card'>
                            <FaProjectDiagram className='about__icon' />
                            <h5> SE Projects</h5>
                            <small>No independednt projects so far</small>
                        </article>
                    </div>
                    <p>
                        I major in software engineering and as a side hustle,
                        i have been teaching english in an institute I have also studied in.
                        Unfortunately I have not had the opportunity to work on many SE projects and I have
                        started working on front end projects only a few month ago.
                        I hope I can improve my skills and soon get a job related to my major.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Get in touch with me</a>
                </div>
            </div>
        </section>
    )
}

export default About