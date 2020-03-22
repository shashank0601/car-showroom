import React,{Component} from 'react';
import items from './data';

const CarContext = React.createContext();

class CarProvider extends Component {
  state={
    cars:[],
    sortedCars:[],
    featuredCars:[],
    loading:true,
    type:'all',
    capacity: 1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSpeed:0,
    maxSpeed:0,
    fuel:false,
    insurance:false
  };

  componentDidMount(){
    let cars=this.formatData(items);
    // console.log(rooms);
    let featuredCars = cars.filter(car => car.featured===true)
    let maxPrice = Math.max(...cars.map(item => item.price));
    let maxSpeed = Math.max(...cars.map(item => item.speed));
    this.setState({
      cars:cars,
      featuredCars:featuredCars,
      sortedCars:cars,
      loading:false,
      price: maxPrice,
      maxPrice: maxPrice,
      maxSpeed:maxSpeed
    })
  }

  getCar=(slug)=>{
    let tempCars=[...this.state.cars];
    const car = tempCars.find(car => car.slug===slug);
    return car;
  }

  handleChange=(event)=>{
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox'? target.checked : target.value;
    this.setState({
      [name]:value
    },this.filterCars);
  };

  filterCars(){
    let {cars,type,capacity,price,minSpeed,maxSpeed,fuel,insurance}=this.state;
    let tempCars = [...cars];
    capacity = parseInt(capacity); 
    price = parseInt(price);

    //filter by type
    if (type !== 'all') {
      tempCars = tempCars.filter(car => car.type === type);
    }
    this.setState({
      sortedCars:tempCars
    });

    //filter by number of Guests
    if (capacity !==1) {
      tempCars = tempCars.filter(car => car.capacity >=capacity)
    }
    this.setState({
      sortedCars:tempCars
    });

    //filter by price range
    tempCars = tempCars.filter(room => room.price <= price);
    this.setState({
      sortedCars:tempCars
    });

    // filter by car speed
    tempCars = tempCars.filter(car => car.speed >= minSpeed && car.speed<=maxSpeed)
    this.setState({
      sortedCars:tempCars
    });

    // filter by fuel
    if (fuel) {
      tempCars = tempCars.filter(car => car.fuel)
    }
    this.setState({
      sortedCars:tempCars
    })

    // filter by insurance
    if (insurance) {
      tempCars = tempCars.filter(car => car.insurance)
    }
    this.setState({
      sortedCars:tempCars
    })



  }

  formatData(items){
    let tempItems = items.map(item =>{
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let car = {...item.fields,images:images,id};
      return car;
    });
    return tempItems;
  }


  render(){
    return(
        <CarContext.Provider value={{...this.state,getCar:this.getCar,handleChange:this.handleChange}}>
          {this.props.children}
        </CarContext.Provider>
    );
  };
}

const CarConsumer = CarContext.Consumer;

export function withCarConsumer(Component){
  return function ConsumerWrapper(props){
    return (
      <CarConsumer>
        {value => <Component {...props} context={value} />}
      </CarConsumer>
    )
  } 
}

export {CarProvider,CarContext,CarConsumer};
