import React,{Component} from 'react';
import {CarContext} from '../context';
import Car from './Car';
import Title from './Title';
// import Loading from './Loading';

class FeaturedCars extends Component {
  static contextType = CarContext;


  render(){
    let {loading, featuredCars:cars} = this.context;
    cars = cars.map( car =>{
      return <Car key={car.id} car={car} />;
    })
    // console.log(rooms);
    return(
      <section className='featured-cars'>
        <Title title='Featured Cars' />
          <div className='featured-cars-center'>
            {cars}
          </div>
      </section>
    );
  };
}

export default FeaturedCars;
