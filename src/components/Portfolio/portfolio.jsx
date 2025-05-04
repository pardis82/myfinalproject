import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfoliopardis1.png'
import IMG2 from '../../assets/Youtubeclone.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'my portfolio page',
        subtitle: 'My first time coding and hosting a real website using bootstrap layouts',
        github: 'https://github.com/pardis82/myportfoliowebsite.git',
        demo: 'https://pardis82.github.io/myportfoliowebsite/'
    },

    {
        id: 2,
        image: IMG2,
        title: 'my youtube clone',
        subtitle: 'My first time practicing html and css by creating a clone of a single youtube page',
        github: 'https://github.com/pardis82/YouTube-clone.git',
        demo: 'https://pardis82.github.io/YouTube-clone/'
    }
]



const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My recent work</h5>
            <h2>Portfolio</h2>
            <container className="portfolio__container">
                {
                    data.map(({ id, image, title, subtitle, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <p className="subtitle">{subtitle}</p>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github reposirtory</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'> Project Demo</a>
                                </div>

                            </article>
                        )
                    })
                }



            </container>
        </section>
    )
}

export default portfolio