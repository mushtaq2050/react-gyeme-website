import React from 'react'
import "./Reason.css"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Reason = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className='container'>
      <div className="reasons-container" id='reasons'>
        <div className="reasons-img-container" data-aos="zoom-in" data-aos-easing="ease-in-out">
        <img src="/images/grid1.png" alt="" className='left-img' />
        <img src="/images/grid2.png" alt="" className='right-img' />
        <img src="/images/grid3.png" alt="" className='below-left' />
        <img src="/images/grid4.png" alt="" className='below-right' />
        </div>
        <div className="reason-text-container" data-aos="zoom-out" data-aos-easing="ease-in-out">
            <span className='reason-span'>SOME REASONS</span>
            <span className='why-chose'>
            <span className='stroke-text'>WHY</span> <span className='choose-us'>CHOOSE US?</span>
            </span>
            <div className="offers-container">
                <img src="/images/offer.png" alt="" />
                <span>OVER 140+ EXPERT COACHS</span>
            </div>
            <div className="offers-container">
                <img src="/images/offer.png" alt="" />
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div className="offers-container">
                <img src="/images/offer.png" alt="" />
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div className="offers-container">
                <img src="/images/offer.png" alt="" />
                <span>RELIABLE PARTNERS</span>
            </div>
            <div className="parteners">
                <span>OUR PARTNERS</span>
                <div className="parteners-images">
                    <img src="/images/partener1.png" alt="" />
                    <img src="/images/partener2.png" alt="" />
                    <img src="/images/partener3.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reason
