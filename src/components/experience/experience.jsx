import React from 'react'
import './experience.css'
import { FaCheckSquare } from "react-icons/fa";
const experience = () => {
    return (
        <section id='experience'>
            <h5>What I know</h5>
            <h2>My skills</h2>

            <container className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front end development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaCheckSquare className='experience__details-icons' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermediate level</small>
                            </div>

                        </article>

                        <article className='experience__details'>
                            <FaCheckSquare className='experience__details-icons' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Beginner</small>
                            </div>

                        </article>

                        <article className='experience__details'>
                            <FaCheckSquare className='experience__details-icons' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Beginner</small>
                            </div>

                        </article>

                        <article className='experience__details'>
                            <FaCheckSquare className='experience__details-icons' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Beginner</small>
                            </div>

                        </article>

                        <article className='experience__details'>
                            <FaCheckSquare className='experience__details-icons' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Beginner</small>
                            </div>

                        </article>

                    </div>


                </div>

                <div className="experience__teaching">
                    <h3>Teaching English </h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaCheckSquare className='experience__details-icons' />
                            <div>
                                <h4>Online</h4>
                                <small className='text-light'>1 year experience</small>
                            </div>

                        </article>

                        <article className='experience__details'>
                            <FaCheckSquare className='experience__details-icons' />
                            <div>
                                <h4>In Person</h4>
                                <small className='text-light'>3 and a half years of experience</small>
                            </div>

                        </article>
                    </div>

                </div>
            </container>
        </section>
    )
}

export default experience