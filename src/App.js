import React, { createContext, useState } from 'react';
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
import Search from './Componets/Search/Search';
import Hotelroom from './Componets/Hotelroom/Hotelroom';
import PrivateRoute from './Componets/PrivateRoute/PrivateRoute';
import Login from './Componets/Login/Login';

export const userContext = createContext();

function App() {
    const [isSignedIn,setSignedIn] = useState({})
    const [place,setPlace] = useState({})
    
  return (
     
    
     <userContext.Provider value={[isSignedIn,setSignedIn,place,setPlace]}>
         <h3>email: {isSignedIn.email}</h3>
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
             <Route path="/login">
                    <Login></Login>
             </Route>
              <PrivateRoute path="/search">
                  <Search></Search>
              </PrivateRoute>
          </Switch>
      </Router>
     </userContext.Provider>
    
  );
}

export default App;
