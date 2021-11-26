import React, { useEffect, useState } from 'react';

import Customer from './compenents/customer';
import io from 'socket.io-client'

import Telephone from './compenents/Telephone';

function SocketApp() {

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:3500/`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  
  return (
    <div className="App">
      <header className="app-header">
        React Chat
      </header>
      <Customer  />
         
      { socket ? (
        <div className="chat-container">
          <Telephone socket={socket} />
         
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default SocketApp;