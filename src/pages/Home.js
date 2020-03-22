import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedCars from '../components/FeaturedCars';

const Home = () => {
  return (
    <div>
      <Hero>
        <Banner title={'Luxury Cars'} subtitle={'Luxury cars starting at 15000$'} >
          <Link to="/cars" className="btn-primary">Our Cars</Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedCars />
    </div>
  );
};

export default Home;
