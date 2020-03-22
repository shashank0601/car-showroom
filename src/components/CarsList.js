import React from 'react';
import Car from './Car';

function CarsList(props){
  if (props.cars.length === 0) {
    return(
      <div className='empty-search'>
        <h3>Unfortunately no cars match your filter criteria</h3>
      </div>
    );
  }
  return(
    <section className='car-list'>
      <div className='carslist-center'>
        {props.cars.map(car =>{
          return <Car key={car.id} car={car} />
        })}
      </div>
    </section>
  );
};

export default CarsList;
