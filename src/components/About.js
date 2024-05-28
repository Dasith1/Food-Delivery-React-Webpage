import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import aboutlogo from '../assets/aboutlogo.jpg'
 

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img className="aboutimg" src={aboutlogo} alt=''/>
        </div>
        <div className='about-section-text-container'>
            <p className='aboutheading'>About</p>
            <h1 className='about-heading'>
            The Heart of Our Service<br/> Fresh Ingredients and Fast Delivery
            </h1>
             
              

              
        </div>
      
    </div>
  )
}

export default About
