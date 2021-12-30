

import Header from './components/Navbars/Navbar.js';
import Footer from './components/Footer/Footer.js';
import * as React from 'react'
import  { useState, useEffect } from 'react';

import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import ChatForm from "./components/Socket.io/compenents/chat/ChatForm"
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import Customer from './components/Socket.io/compenents/customer';
import io from 'socket.io-client'
import Telephone from './components/Socket.io/compenents/Telephone';
import SocketApp from 'components/Socket.io/sockt.io';
// import * as React from 'react'

// 1. import `ChakraProvider` component


export default function app() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState();
  const [socket, setSocket] = useState(null);


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setLogged(true);
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      
    }
  }, []);


  useEffect(() => {
    const newSocket = io(`https://tangled-backend.herokuapp.com/`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
   
   
      <Router>
         {/* <ChakraProvider> */}
        <Switch>
          {socket? 
          <>
          <Route path="/admin" component={Admin} />
          <Route path="/socketApp" component={SocketApp} />
          <Route path="/chatapp" component={ChatForm} />
          <Route path="/rtl" component={RTL} />

          </> : <p>Hi</p>}
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
        {/* </ChakraProvider> */}
      </Router>
    
    
      
      
  );
}
