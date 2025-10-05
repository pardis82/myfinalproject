import React from 'react'
import CV from '../../assets/PardisJavanmardiResume1.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Wanna chat</a>
        </div>
    )
}

export default CTA