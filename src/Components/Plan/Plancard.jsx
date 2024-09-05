import React, { useEffect, useRef } from 'react';
import './Plancard.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Plancard = ({ svg, price, detail1, detail2, detail3, name }) => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Ensures animation happens every time the element enters the viewport
    });

  }, []);

  return (
    <div className='plan-card' data-aos="fade-up">
      <span className='svg-plan'>{svg}</span>
      <span className='plan-name'>{name}</span>
      <span className='plan-price'>{price}</span>
      <span className='plan-detail'>
        <img src="/images/tick.png" alt="" />
        <span>{detail1}</span>
      </span>
      <span className='plan-detail'>
        <img src="/images/tick.png" alt="" />
        <span className='detail2-plan'>{detail2}</span>
      </span>
      <span className='plan-detail'>
        <img src="/images/tick.png" alt="" />
        <span>{detail3}</span>
      </span>
      <span className='more-benefits'>
        <span>See more benefits</span>
        <span><img src="/images/svg-card.png" alt="" /></span>
      </span>
      <div className='buttonss'>
        <button className="button">Join Us</button>
      </div>
    </div>
  );
}

export default Plancard;
