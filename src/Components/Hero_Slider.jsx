import React from 'react'
import SearchBar from './SearchBar'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage'
import pic from '../assets/abc.jpg'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'



 

function Hero_Slider() {
  return (
    <>
    <SearchBar/>
    <div>
        
        <div className='Corousel'>
        <Carousel className='slider'>
      <Carousel.Item interval={1000}>
         <img src={pic} height='500px' width='100%' alt="" />
    
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={ pic1} alt="" height='500px' width='100%' />

       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={ pic2} height='500px' width="100%" alt="" />

        
      </Carousel.Item>
    </Carousel>
               
            </div>
      
    </div>
    </>
  )
}

export default Hero_Slider
