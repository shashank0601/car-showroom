import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import CarsContainer from '../components/CarsContainer';

const Cars =() =>{
  return(
    <>
      <Hero hero='carsHero'>
        <Banner title={'Our Cars'} >
          <Link to='/home' className='btn-primary'>Back to Home</Link>
        </Banner>
      </Hero>
      <CarsContainer />
    </>
  );
};

export default Cars;
