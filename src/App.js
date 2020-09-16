import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home/Home';
import { Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Componets/Booking/Booking';

function App() {
  return (
    
      <Router>
          <Switch>
              <Route path="/home">
                  <Home></Home>
              </Route>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/booking/:placeName">
                  <Booking></Booking>
              </Route>
          </Switch>
      </Router>
    
  );
}

export default App;
