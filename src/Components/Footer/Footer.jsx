import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <hr className='footer-hr'/>
    <div className='footer-container'>
       <div className="footer-img-container-footer">
        <div><img src="/images/twitter.png" alt="" /></div>
    <div><img src="/images/insta.png" alt="" /></div> 
       <div> <img src="/images/linked.png" alt="" /></div>
       </div>
       <div className="footer-logo">
        <img src="/images/logo1.png" alt="" />
       </div>
    </div>
    </>
  )
}

export default Footer
