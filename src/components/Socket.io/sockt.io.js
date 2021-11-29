import React, { useEffect, useState } from 'react';

import Customer from './compenents/customer';
import io from 'socket.io-client'
import Telephone from './compenents/Telephone';
import OnSite from './compenents/OnSite';

function SocketApp() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    // Heroku: https://project401.herokuapp.com/   Localhost: http://localhost:3500/
    const newSocket = io(`https://project401.herokuapp.com/`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  
  return (
    <div className="App">
      <header className="app-header">
        React Chat
      </header>
      {/* <Customer/> */}
         
      { socket ? (
        <div className="chat-container">
          <Telephone socket={socket} />
          <OnSite socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default SocketApp;