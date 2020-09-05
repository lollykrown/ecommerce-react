import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/popper.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Home from './components/Home';
import Footer from './components/Footer';


class App extends Component {
  
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
