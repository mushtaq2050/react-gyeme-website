import React from 'react'
import "./Plan.css"
import Plancard from './Plancard'
import { CiHeart } from "react-icons/ci";
import { FaProductHunt } from "react-icons/fa6";
import { TbPremiumRights } from "react-icons/tb";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
const Plan = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className='container'>
      <div className="plan-container" id='plan'>
        <div className="heading-container-plans" >
            <span className='stroke-text' data-aos="zoom-in" data-aos-easing="ease-in-out">Ready to Start</span>
            <span className='journey-span' data-aos="fade-right" data-aos-easing="ease-in-out">Your Journey</span>
            <span className='stroke-text' data-aos="fade-right" data-aos-easing="ease-in-out">now withus</span>
        </div>
        <div className="plan-card-container">
           < Plancard svg={<CiHeart/>} name="BASIC PLAN" price="$ 25" detail1="2 hours of excercises" detail2='Free consultaion to coaches' detail3="Access to The Community" />
           <div className='prememium'  data-aos="zoom-in" data-aos-easing="ease-in-out">
      <span className='svg-plan-premium'> <TbPremiumRights/> </span>
      <span className='plan-name'>PREMIUM PLAN</span> 
       <span className='plan-price'>$ 30</span>
       <span className='plan-detail'>
        <img src="/images/tick.png" alt="" />
        <span>5 hour of excercises</span>
       </span>
       <span className='plan-detail'>
        <img src="/images/tick.png" alt="" />
        <span className='detail2-plan'>Free consultaion of Coaches</span>
       </span>
       <span className='plan-detail'>
        <img src="/images/tick.png" alt="" />
        <span>Accessto minibar</span>
       </span>
       <span className='more-benefits'>
        <span>see more benefits</span> <span><img src="/images/svg-card.png" alt="" /></span>
        </span>
        <div className='buttonss'>
        <button class="button"> Join Us
        </button>
        </div>
    </div>
           < Plancard svg={< FaProductHunt/>} name="PRO PLAN" price="$ 45" detail1="8 hours of excercises" detail2='Consultation of Private Coach' detail3="Free Fitness Merchandises" />

        </div>
      </div>
    </div>
  )
}

export default Plan
