  //With High order components
import React from 'react';
import CarsList from './CarsList';
import CarsFilter from './CarsFilter';
import {withCarConsumer} from '../context';

function CarsContainer({context}){
  const {sortedCars,cars}=context;
  return(
    <>
      <CarsFilter cars={cars}/>
      <CarsList cars={sortedCars}/>
    </>
  );
};

export default withCarConsumer(CarsContainer)


    //Without Higher order components
// import React from 'react';
// import CarsList from './CarsList';
// import CarsFilter from './CarsFilter';
// import {CarConsumer} from '../context';
//
// function CarsContainer(){
//   return(
//     <CarConsumer>
//       {value =>{
//         const {sortedCars,cars}=value;
//         return(
//           <>
//             <div>Hello from CarsContainer</div>
//             <CarsFilter cars={cars}/>
//             <CarsList cars={sortedCars}/>
//           </>
//         );
//       }}
//     </CarConsumer>
//   );
// };
//
// export default CarsContainer;
