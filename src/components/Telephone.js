
import {Form,Button} from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3500";

function Telephone({socket}) {
  

    

  const [payload, setPayload] = useState("");
  

   console.log(socket.id);


    useEffect(() => {

      // const socket = socketIOClient(ENDPOINT);

      socket.on('telephoneIssue',(payload)=>{
        // const haroun=response.obj.service.department
        console.log('===========================================',payload.obj.service.phone_Number);
        setPayload(payload);
        
      })

  
    }, [socket]);




    return (
        <div>

            {payload && payload.obj.service.phone_Number  } 




        </div>




    )




}

export default Telephone






















// import React, { useEffect, useState } from 'react';

// // import './Messages.css';

// function Messages({ socket }) {
//   const [messages, setMessages] = useState({});

//   useEffect(() => {
//     const messageListener = (message) => {
//       setMessages((prevMessages) => {
//         const newMessages = {...prevMessages};
//         newMessages[message.id] = message;
//         return newMessages;
//       });
//     };
  
//     const deleteMessageListener = (messageID) => {
//       setMessages((prevMessages) => {
//         const newMessages = {...prevMessages};
//         delete newMessages[messageID];
//         return newMessages;
//       });
//     };
  
//     socket.on('telephoneNewCase', messageListener);
//     // socket.on('deleteMessage', deleteMessageListener);

//     // socket.emit('getMessages');

//     return () => {
//       socket.off('message', messageListener);
//       socket.off('deleteMessage', deleteMessageListener);
//     };
//   }, [socket]);

//   return (
//     <div className="message-list">
//       {[...Object.values(messages)]
//         .sort((a, b) => a.obj.time - b.obj.time)
//         .map((message) => (
//           <div
          
//             // key={message.id}
//             // className="message-container"
//             // title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
//           >

//               <p>Hello</p>


//             {/* <span className="user">{message.user.name}:</span>
//             <span className="message">{message.value}</span>
//             <span className="date">{new Date(message.time).toLocaleTimeString()}</span> */}
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default Messages;