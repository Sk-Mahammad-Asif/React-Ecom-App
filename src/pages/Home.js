import React from 'react';
import FeatureProduct from '../components/FeatureProduct';

//import styled  from 'styled-components';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Trusted from '../components/Trusted';
//import ProgressBar from "@badrap/bar-of-progress";

const Home = () => {



  //passing props in HeroSection via myData
 const data = {
  name: "Product store",
 }

  return ( 
    <>
    
      <HeroSection myData={data} />
      <FeatureProduct/>
      <Services/>
      <Trusted/>
 
    </>

  )       
};


export default Home
