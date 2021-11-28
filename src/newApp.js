
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

export default function newApp() {
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
    const newSocket = io(`http://localhost:3500`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <>
          <header className="app-header">React Chat</header>
          <Customer />
          <div className="App">
            {socket ? (
              <div className="chat-container">
                <Telephone socket={socket} />
              </div>
            ) : (
              <div>Not Connected</div>
            )}
          </div>
    </>
  );
}
