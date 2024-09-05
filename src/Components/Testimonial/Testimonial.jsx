import React from 'react'
import "./Testimonial.css"
import { Testimonialdata } from './Testimonialdata'
import { motion } from 'framer-motion';
import { useState } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);

  const transition={type: 'spring', duration: 3}
  const [selected, setselected] = useState(0)
  const tLength=Testimonialdata.length;
  return (
    <div className='container'>
      <div className="testimonial-container" id='testimonial'>
        <div className="left-testimonial"  data-aos="fade-right" data-aos-easing="ease-in-out" >
       <span className='testiminial'>Testimonials</span>
       <div className='testimonial-span'>
        <span className='stroke-text'>What they</span>
       <span className='about-testimonial'> say about us</span>
       </div>
          <motion.span
          key={selected}
          initial={{opacity:0, x:-100}}
          animate={{opacity:1, x:0 }}
          exit={{opacity:0, x:-100}}
          transition={{...transition,duration:2.5}}
           className='testimonial-reviews'>
            {Testimonialdata[selected].review}
          </motion.span>
          <span>
            <span className='testimonial-name'>{Testimonialdata[selected].name} </span>
            <span className='testimonial-status'>- {Testimonialdata[selected].status}</span>
          </span>
         
        </div>
        <div className="right-testimonial" data-aos="zoom-in" data-aos-easing="ease-in-out">
          <div className="arrows">
              <img
              onClick={()=>{
                selected === 0
                ? setselected(tLength-1)
                : setselected((prev)=>prev-1)
              }}
               src="/images/left.png" alt="" />
              <img
                onClick={()=>{
                  selected === tLength -1
                  ? setselected(0)
                  : setselected((prev)=>prev+1)
                }}
               src="/images/right.png" alt="" />
              </div>
              <motion.div 
              initial={{opacity:0, x:-100}}
              whileInView={{opacity:1, x:0}}
              transition={{...transition, duration:2.5}}
              className="div1">

              </motion.div>
              <div className="dev2"></div>
              <div className='testimonial-image'>
              <motion.img
              key={selected}
              initial={{opacity:0, x:100}}
              animate={{opacity:1, x:0 }}
              exit={{opacity:0, x:-100}}
              transition={{...transition,duration:2}}
               src={Testimonialdata[selected].image} alt="" />
              </div>
              </div>
        </div>
      </div>
  )
}

export default Testimonial
