import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/pars language school 2.jpg'
import AVT2 from '../../assets/pars system.jpg'
import AVT3 from '../../assets/sahar.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
import { Pagination } from 'swiper/modules';


const data = [
    {
        id: 1,
        image: AVT1,
        title: 'Client testimonials',
        name: 'Pars Language School',
        review: "Ms.Javanmardi has significantly contributed to our students' progress through her dedication and effective teaching methods during her four years with our institute."

    },
    {
        id: 2,
        image: AVT2,
        title: 'Client testimonials',
        name: 'Ashna Pars System',
        review: 'Ms.Javanmardi has demonstrated her commitment and attention to detail during her internship with our company.'

    },
    {
        id: 3,
        image: AVT3,
        title: 'Client testimonials',
        name: 'Sahar Vatankhah',
        review: "Ms.Javanmardi's accuracy and commitment in translating and subtitling our educational videos, greatly enhanced the quality of our projects."


    },
    



]

const testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ id, image, title, name, review }) => {
                        return (
                            <SwiperSlide key={id} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={image} alt={title} />
                                    <h3>{title}</h3>
                                </div>

                                <h5 className='clinet__name'>{name}</h5>
                                <small className='client__review'>{review}</small>

                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>


        </section>
    )
}

export default testimonials