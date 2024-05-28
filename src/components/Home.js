import React from 'react'
import Navbar from './Navbar'
import { BsArrowRight } from 'react-icons/bs'
import foodplate from '../assets/foodplate.jpg'
import About from './About'

const Home = () => {
  return (
    <div className="home-container">
        <Navbar/>
      <div className="home-banner-container" >
        <div className='home-text-section'>
          <h1 className='primary-heading'>
          Taste the Best Order Food Delivery Today
          </h1>
          <button className='secondary-button'> Order Now <BsArrowRight/> </button>
        </div>
       
       <div className='home-image-container'>
        <img className='banner-image' src={foodplate} alt=''/>
       </div>
       
      </div>

      <hr style={{ borderTop: '8px solid #4554', width: '80%', margin: 'auto', borderRadius: 15 }} />
 

    </div>
  )
}

export default Home
