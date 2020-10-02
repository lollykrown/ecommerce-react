import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
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
          <Route exact path="/accessories" component={() => <ProductList cat={"accessories"} />} />
          <Route exact path="/beauty" component={() => <ProductList cat={"beauty"} />}/>
          <Route exact path="/jewelry" component={() => <ProductList cat={"jewelry"} />}/>
          <Route exact path="/phones" component={() => <ProductList cat={"phones"} /> } />
          <Route exact path="/men" component={() => <ProductList cat={"men"} /> } />
          <Route exact path="/women" component={() => <ProductList cat={"women"} /> } />
          <Route exact path="/kids" component={() => <ProductList cat={"kids"} />} />
          <Route exact path="/shoes" component={() => <ProductList cat={"shoes"} />} />
          <Route exact path="/house" component={() => <ProductList cat={"house"}/>} />
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
