import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/jimm.jpg'
import AVTR2 from '../../assets/Alice.jpg'
import AVTR3 from '../../assets/dann.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
{
  avatar:AVTR1,
  name:'James Ambani',
  review:'Working with Mark was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach.'
},
{
  avatar:AVTR2,
  name:'Alice',
  review:'Not only was Mark’s work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality.'
},
{
  avatar:AVTR3,
  name:'Dan',
  review:'Mark has done a fantastic job overall. Not only the site is to design, the code is very clean and slick. Love the way he achieved the translations portion of the site'
},

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testemonials</h2>
    <Swiper className="container testimonials__container"
    // install Swiper modules
    modules={[ Pagination ]}
    spaceBetween={40}
    slidesPerView={1}  
    pagination={{ clickable: true }}
    >

   {
    data.map(({avatar, name, review}, index )=> {
      return (
        <SwiperSlide key={index} className="testimonial">

        <div className="client__avatar">
          <img src={avatar} />
        </div>
        
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
      )
    })
   }
    </Swiper>

    </section>
  )
}

export default Testimonials