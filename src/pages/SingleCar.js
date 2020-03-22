import React,{Component} from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {CarContext} from '../context';
import StyledHero from '../components/StyledHero';

class SingleCar extends Component{
  constructor(props){
    super(props);
    // console.log(this.props);
    this.state={
      slug: this.props.match.params.slug,
    };
  }

  static contextType = CarContext;
  render(){
    const {getCar} = this.context;
    const car = getCar(this.state.slug);
    // console.log(car);
    if (!car) {
      return(<div className='error'>
        <h3> No such car found </h3>
        <Link to='/cars'className='btn-primary'>Back to Cars</Link>
      </div>
      );
    }
    const {name,description,capacity,speed,price,extras,fuel,insurance,images} = car;
    const [mainImg,...followUpImg] = images;
    return(
      <>
        <StyledHero img={mainImg }>
          <Banner title={`${name}`}>
          </Banner>
        </StyledHero>
        <section className='single-car'>
          <div className='single-car-images'>
            {followUpImg.map((item,index) => {
              return(<img key={index} src={item} alt={name} />);
            })}
          </div>
          <div className='single-car-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>speed : {speed} mph</h6>
              <h6>Max Capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
              <h6>Insurance : {insurance ? 'Insurance Available':'Insurance not available'}</h6>
              <h6>Fuel : {fuel ? 'Petrol':'Diesel'}</h6>
            </article>
          </div>
        </section>
        <section className='car-extras'>
          <h6>extras</h6>
          {extras.map((item,index) =>{
            return (<li key={index} >{item}</li>); 
          })}
        </section>
      </>
    );

    return(
        <div> hello from SingleCar page</div>
    );
  };
}


export default SingleCar;
