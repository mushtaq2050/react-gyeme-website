import React, { useRef } from 'react'
import "./Email.css"
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Email = () => {
    const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_l859mi7', 'template_5161uj6', form.current, {
            publicKey: 'EF1IgUKBfI36A7lvb',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <div className='container email-input-btn-container'>
         <hr className='email-hr' />
      <div className="email-container" id='join-us'>
        <div className="email-text-container">
            <span>
                <span className='stroke-text'>Ready to</span>
                <span className='level-email'>  Level up</span>
            </span>
            <span>
                <span className='level-email'>your body</span>
                <span className='stroke-text'>  with us?</span>
            </span>
        </div>
        <div className="email-input-container">
        <form ref={form} className='input-container' onSubmit={sendEmail}>
 <input type="email" placeholder='Enter Your Email Adress Here' name='from_email' />
 <button  className=' btn-input'>Join Now</button>
 </form>
 </div>
      </div>
    </div>
  )
}

export default Email
