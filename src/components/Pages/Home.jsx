import React from 'react'
import Slider from "./Slider/Slider1"
import WelcomeSection from './WelcomeSectin';
import AboutRs from '../About/AboutRs';
import ServiceCards from './../Cards/ServicesCards';
import ProductsPage from '../Product/ProductsPage';


const Home = () => {
  
  return (
    <div>
      <Slider/>
      <WelcomeSection/>
     <ServiceCards/> 
      <ProductsPage/>


    </div>
  )
}

export default Home