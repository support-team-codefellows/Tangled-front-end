import React, { useEffect, useState } from 'react';

import Customer from './compenents/customer';
import io from 'socket.io-client'
import Telephone from './compenents/Telephone';
import OnSite from './compenents/OnSite';
import Container from 'react-bootstrap/Container';

function SocketApp() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(`https://tangled-backend.herokuapp.com/`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  
  return (
    <Container>
      <header className="app-header">
      
      </header>
      {/* <Customer/> */}
         
      { socket ? (
        <div className="chat-container">
          <Telephone  />
          <OnSite  />
        </div>
      ) : (
        <div>Not Connected</div>
      )}

    </Container>
  );
}

export default SocketApp;