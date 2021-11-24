import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import Telephone from './components/Telephone';


// import './App.css';

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:3500/system`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  

  return (
    <div className="App">
      <header className="app-header">
        React Chat
      </header>
      { socket ? (
        <div className="chat-container">
          <p>ffffffffffff</p>
          <Telephone socket={socket} />
         
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default App;