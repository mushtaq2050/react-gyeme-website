import React from 'react'
import "./Programcard.css"
import { motion } from 'framer-motion'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Programcard = ({svg,name,detail}) => {
  const transition={type: 'spring', duration :3}
    useEffect(() => {
      AOS.init({
        duration: 1000, // Customize animation duration
        once: false, // Whether animation should happen only once
      });
    }, []);
  return (
    <div className='card-program'  data-aos="zoom-in" data-aos-easing="ease-in-out" >
       {svg}
       <span className='card-name-program'>{name}</span>
       <p>{detail}</p>
       <span className='card-join'>
        <span>Join now</span>
        <span><img src="/images/svg-card.png" alt="" /></span>
       </span>
    </div>
  )
}

export default Programcard
