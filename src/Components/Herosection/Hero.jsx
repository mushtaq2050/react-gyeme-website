import React from 'react'
import "./Hero.css"
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  const transition={type: 'spring', duration: 3}
  return (
    <div className='container'>
      <div className="hero-container">
        <div className="text-hero-container">
       <div className="fitness-club">
      <p className=''>THE BEST  FITNESS CLUB IN THE TOWN</p>
      <motion.div 
            initial={{left: '238px'}}
            whileInView={{left: '2rem'}}
            transition={{...transition, type: 'tween'}}
       className='yellow'>
      </motion.div>
       </div>
      
       <h1 className='shape-body'> SHAPE YOUR <br />
       IDEAL BODY</h1>
       <p className='p-hero-text cssanimation leFadeInLeft sequence'>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
       <div className="views-hero">
       <div className="viewsstats">
            <span className='count'>
            
            <CountUp start={102} end={140} duration={4} />
            <span className='plus'>  +</span>
            </span>
            <span className='product'>EXPERT COACHES</span>
          </div>
       <div className="viewsstats">
            <span className='count'>
            
            <CountUp start={892} end={978} duration={4} />
            <span className='plus'>  +</span>
            </span>
            <span className='product'>MEMBERS JOINED</span>
          </div>
       <div className="viewsstats">
            <span className='count'>
            
            <CountUp start={1} end={50} duration={4} />
            <span className='plus'>  +</span>
            </span>
            <span className='product'>FITNESS PROGRAMS</span>
          </div>
       </div>
       <div className="btns-hero">

<button className='hero-btn'>
  <p>Get Started</p>
</button>

<button class="Btn">
Learn More
 
</button>

       </div>
        </div>
        <div className="imges-hero-container">
        <div className="img-hero-container">
        <motion.img
        initial={{opacity:0, y:70}}
        whileInView={{opacity:1, y:0}}
        transition={{...transition, duration:3}}
         src="/images/hero1.png" alt="" />
         </div>
        <motion.div
        initial={{right: '-11.5rem'}}
        whileInView={{right: '-6.5rem'}}
        transition={{...transition, type: 'tween'}}
         className='img-hero-box  no-animation'>
             <img
             src="/images/hero4.png" alt="" />
            <span className='heart-rate'>Heart Rate</span>
            <span className='speed-hero'>116 bpm</span>
        </motion.div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
