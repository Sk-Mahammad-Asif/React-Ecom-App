import React from 'react'
import HeroSection from '../components/HeroSection'
import {useProductContext} from '../context/productcontex'

const About = () => {

  const {myName} = useProductContext();
  //passing props in HeroSection via myData
  const data = {
    name: "Product store About Page",
   }
  return (

      <>
        {myName}
        <HeroSection myData={data}/>
      </>
  )
}

export default About
