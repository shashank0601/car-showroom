import React,{Component} from 'react';
import Title from './Title';
import {FaNewspaper, FaDollarSign, FaServicestack, FaExchangeAlt} from 'react-icons/fa';


class Services extends Component{

  state={
    services:[
      {
        icon: <FaNewspaper />,
        title: 'Easy paperwork',
        info: 'Get all your paperwork done at ont stop. Hassle free experience'
      },
      {
        icon: <FaDollarSign />,
        title: 'Loan facility',
        info: 'Loan facility available with best in market rates and high coverage'
      },
      {
        icon: <FaServicestack />,
        title: 'Free service',
        info: 'Get free service for your car for the 1st year.'
      },
      {
        icon: <FaExchangeAlt />,
        title: 'Exchange available',
        info: 'Excahnge your old car for a new one of your choice'
      },
    ]
  }

  render(){
    return(
      <section className='services'>
        <Title title={'Services'} />
        <div className='services-center'>
          {this.state.services.map((item,index) =>{
            return(
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    );
  };
}

export default Services;
