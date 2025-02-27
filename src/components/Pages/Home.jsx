import React from 'react'
import Slider from "./Slider/Slider1"
import AutoSlider from './Slider/AutoSlider'
import WelcomeSection from './WelcomeSectin';

const Home = () => {
  return (
    <div>
      <Slider/>
      {/* <AutoSlider/> */}
      <WelcomeSection/>
    </div>
  )
}

export default Home