import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';


function App(){
  
    return (
      <React.Fragment>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;
