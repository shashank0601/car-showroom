import React,{useContext} from 'react';
import {CarContext} from '../context';
import Title from './Title';


function getUnique(items,value){
  return [...new Set(items.map(item =>item[value]))];
};

function CarsFilter(props){

  const context = useContext(CarContext);
  const {handleChange,type,capacity,price,minPrice,maxPrice,minSpeed,maxSpeed,fuel,insurance}=context;

  //get unique types
  let types = getUnique(props.cars,'type')
  types=['all',...types];
  types=types.map((item,index) =>{
    return(
      <option value={item} key={index} >{item}</option>
    )
  });

  let guests = getUnique(props.cars,'capacity')
  guests=guests.map((item,index)=>{
    return(
        <option value={item} key={index}>{item}</option>
    );
  });
  return(
    <section className='filter-container'>
      <Title title={'Search Cars'}/>
      <form className='filter-form'>
        {/* start car-type*/}
        <div className='form-group'>
          <label htmlFor='type'>Car Type</label>
          <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* end car-type*/}
        {/* start capacity*/}
        <div className='form-group'>
          <label htmlFor='type'>Capacity</label>
          <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
            {guests}
          </select>
        </div>
        {/* end capacity*/}
        {/* start car price */}
        <div className='form-group'>
          <label htmlFor='price'>Car Price ${price}</label>
          <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
        </div>
        {/* end car price */}
        {/* start of speed*/}
        <div className='form-group'>
          <label htmlFor='size'>Car Speed</label>
          <input type='number' name='minSpeed' id='size' value={minSpeed} onChange={handleChange} className='size-input'/>
          <input type='number' name='maxSpeed' id='size' value={maxSpeed} onChange={handleChange} className='size-input'/>
        </div>
        {/* end of speed*/}
        {/* start of extras*/}
        <div className='form-group'>
          <div className='single-extra'>
            <input type='checkbox' name='fuel' id='fuel' checked={fuel} onChange={handleChange}/>
            <label htmlFor='fuel'>Petrol</label>
          </div>
          <div className='single-extra'>
            <input type='checkbox' name='insurance' id='insurance' checked={insurance} onChange={handleChange}/>
            <label htmlFor='insurance'>Insurance</label>
          </div>
        </div>
        {/* start of extras*/}
      </form>
    </section>
  );
};

export default CarsFilter;
