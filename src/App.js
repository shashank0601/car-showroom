import React from 'react';
import './App.css';
import Home from './pages/Home';
import SingleCar from './pages/SingleCar';
import Cars from './pages/Cars';
import Error from './pages/Error';
import Navbar from './components/Navbar';
// import Sample from './pages/Sample';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/cars' component={Cars}/>
      <Route exact path='/cars/:slug' component={SingleCar}/>
      {/* <Route exact path='/rooms/pattern/:id' component={Sample}/> */}
      <Route component={Error}/>
    </Switch>
    </div>
  );
}

export default App;
