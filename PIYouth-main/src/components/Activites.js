import React from 'react'
import { ArrowBarRight, ArrowRight } from 'react-bootstrap-icons'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './activities.css'

export const Activites = () => {
  const slideImages = [
    {
      url: '/act1.jpg',
      caption: 'Activite 1',
    },
    {
      url: '/act2.jpg',
      caption: 'Activite 2',
    },
  ]

  return (
    <div className='bg-body-primary padding-block-big'>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className='each-slide' key={index}>
            {/* <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div> */}
            <div className='activities container-fluid  text-dark overflow-hidden'>
              <img src='/lines.png' alt='' className='d-inline' />{' '}
              <h2 className='text-accent text-center d-inline'>Activities</h2>
              <div className='row mb-2'>
                <div className='col-12 position-relative'>
                  <img src={slideImage.url} alt='' className='img_act' />

                  <div className='act-info  bg-accent text-primary-200  border-info p-4 mt-3'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cupiditate accusantium, alias praesentium officiis
                    repudiandae consectetur perferendis repellendus eos?
                    Consequatur, quas!
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
} // end component

// <div className="activities container-fluid bg-light text-dark overflow-hidden">
// <img src="/lines.png" alt=""  className="d-inline"/> <h2 className="text-danger text-center d-inline">Activities</h2>

{
  /* <div className="row mb-2">
          <div className="col-12 position-relative"> 

          <img src="/act1.jpg" alt="" className="img_act"/>

          <div className="position-absolute start-50 top-0 w-40 h-60 bg-light  border-info p-4 mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate accusantium, 
                alias praesentium officiis 
                repudiandae consectetur perferendis repellendus eos? Consequatur, quas!
               
          </div>  
          <ArrowBarRight onClick={()=>{ console.log('Clicked')}}  color ="purple" size={40}/>
         
          
   
          
           </div>
                 
        </div> */
}
