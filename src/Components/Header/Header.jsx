import React from 'react'
import "./Header.css"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const transition={type: 'spring', duration: 3}
  const [togglemenu, settogglemenu] = useState(false)
  return (
    <div className='container'>
     <div className="header-container">
        <div className="logo">
        <img src="/images/logo1.png" alt="" />
        </div>
        <div className="menu">
            <a href="#home">Home</a>
            <a href="#programs">Programs</a>
            <a href="#reasons">WHY US</a>
            <a href="#plan">Plans</a>
            <a href="#testimonial">Testimonials</a>
        </div>
        <div className="join-btn">
     <button><a href="#join-us">Join Now</a></button>
        </div>
        <div className="mobile-menu-container">
        {
      togglemenu
      ?  <IoMdClose onClick={()=>settogglemenu(false)}/>
      : < CiMenuBurger  onClick={()=>settogglemenu(true)}/>
        }
        {
          togglemenu && (
            <div className="menu-mobile scale-up-center">
            <a href="#home">Home</a>
            <a href="#programs">Programs</a>
            <a href="#reasons">WHY US</a>
            <a href="#plan">Plans</a>
            <a href="#testimonial">Testimonials</a>
            <button className='mobile-btn'><a href="#join-us">Join Now</a></button>
        </div>

          )
        }
        </div>

     </div>
    </div>
  )
}

export default Header
