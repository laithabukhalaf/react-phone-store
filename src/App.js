import React, { Component } from 'react';
import {Route,Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';

class App extends Component { 
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route  exact path='/' component={ProductList}/>
          <Route exact path='/Details' component={Details}/>
          <Route exact path='/Cart' component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal/>
        
        
      </React.Fragment>
    );
  }
}

export default App;
