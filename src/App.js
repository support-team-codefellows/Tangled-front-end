
import Header from './components/Navbars/Navbar.js';
import Footer from './components/Footer/Footer.js';
import React, { useState, useEffect } from 'react';
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import Customer from './components/Socket.io/compenents/customer';
import io from 'socket.io-client'
import Telephone from './components/Socket.io/compenents/Telephone';
import SocketApp from 'components/Socket.io/sockt.io';

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
      console.log(' this is the log ', foundUser);
    }
  }, []);
  console.log(' this is the log ', logged);

  useEffect(() => {
    // Heroku: https://project401.herokuapp.com/   Localhost: http://localhost:3500/
    // https://tangled-backend.herokuapp.com/
    const newSocket = io(`https://tangled-backend.herokuapp.com/`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <>
      <Router>
        <Switch>
          {socket? 
          <>
          <Route path="/admin" component={Admin} />
          <Route path="/socketApp" component={SocketApp} />
          <Route path="/rtl" component={RTL} />

          <Route path="/customer" component={Customer} />

          </> : <p>Hi</p>}
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    </>
  );
}
