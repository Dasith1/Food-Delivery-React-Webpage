import React from 'react'
import pickMeals from '../assets/pick-meals-image.png';
import choosemeal from '../assets/choose-image.png';
import Delivery from '../assets/delivery.png';

const Work = () => {
 
    const WorkData =[
        {
            image:pickMeals,
            title:"Pick Meals",
            text:"Users can select their preferred dishes from a variety of options, ensuring a personalized dining experience"
        },
        {
            image:Delivery,
            title:"Delivery",
            text:"Enjoy the convenience of having freshly prepared meals delivered straight to your doorstep."
        },
        {
            image:choosemeal,
            title:"Choose Meal",
            text:"Curate your dining experience by selecting meals tailored to your tastes and dietary preferences"
        }
    ]
 
 
 
    return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className="primary-subheading">How We Work</p>
           
        </div>
      <div className='work-section-bottom'>
        {
           WorkData.map((data)=>(
                <div className='work-section-info'>
                <div className='info-boxes-img-container'>
                <img src= {data.image} alt=''/>
                    </div>    
                    <h2>{data.title}</h2>
                   <p>{data.text}</p>
                </div>
            ) )
        }

      </div>


    </div>
  )
}

export default Work
