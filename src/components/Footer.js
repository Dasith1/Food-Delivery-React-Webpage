import React from 'react'
import logo from '../assets/logo.png';
import { BsYoutube } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';


const Footer = () => {
  return (
    
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={logo} alt=''/>
            </div>
            <div className='footer-icons'>
                <BsFacebook/>
                <BsYoutube/>
                <BsTwitter/>
                
            </div>
        </div>
         <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Help</span>
                <span>Contact</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>info@delivary.com</span>
                <span>01234598789</span>
              
            </div>
            <div className='footer-section-columns'>
                <span>Term & Condition</span>
                <span>Privacy Policy</span>
                 
            </div>
            <div className='footer-section-full'>
                <span>© 2024</span>
             </div>
         </div>
         
    </div>
  )
}

export default Footer
