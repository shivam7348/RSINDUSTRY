import React from 'react'
import Slider from "./Slider/Slider1"
import WelcomeSection from './WelcomeSectin';
import AboutRs from '../About/AboutRs';
import ServiceCards from './../Cards/ServicesCards';


const Home = () => {
  return (
    <div>
      <Slider/>
      <AboutRs/>

     <ServiceCards/> 
      <WelcomeSection/>

    </div>
  )
}

export default Home