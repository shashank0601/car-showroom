import React from 'react';
import defaultImg from '../images/room-1.jpeg';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Car({car}){

  const {name,slug,images,price}=car;

  return(
    <article className='car'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='luxury car' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p></p>
        </div>
        <Link to={`/cars/${slug}`} className='btn-primary car-link'>Features</Link>
      </div>
      <p className='car-info'>{name}</p>
    </article>
  );
};

Car.propTypes={
  room:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired
  })
};
export default Car;