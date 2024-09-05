import React from 'react'
import "./Program.css"
import { MdModelTraining } from "react-icons/md";
import { GiBurningEye } from "react-icons/gi";
import { RiMentalHealthLine } from "react-icons/ri";
import Programcard from './Programcard';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Program = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);


  return (
    <div className='container'>
      <div className="program-container" id='programs'>
        <div className="headings-program" data-aos="fade-down">
             <span className='stroke-text'>EXPLORE OUR</span>
             <span className='program'>PROGRAMS</span>
             <span className='shape'>TO SHAPE YOU</span>
        </div>
        <div className="card-container">
        
            <Programcard svg={ <MdModelTraining/>} name="Strength Training" detail="In this program, you are trained to improve your strength through many exercises."/>
         
            <Programcard svg={ <MdModelTraining/>} name="Cardio Training" detail="In this program, you are trained to do sequential moves in range of 20 until 30 minutes."/>
      
            <Programcard svg={ < GiBurningEye/>} name="Fat Burning" detail="This program is suitable for you who wants to get rid of your fat and lose their weight."/>
          
            <Programcard svg={ < RiMentalHealthLine/>} name="Health Fitness" detail="This programs is designed for those who exercises only for their body fitness not body building."/>
          
        </div>
      </div>
    </div>
  )
}

export default Program
