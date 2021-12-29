// import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, Col } from 'react-bootstrap'
import React, { useEffect, useState } from "react";
const ENDPOINT = "http://localhost:3500/";

import Icon from "@material-ui/core/Icon";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody.js";
import "./socketio.css";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

// core components
// import Table from "components/Table/Table.js";
import Tasks from "../../Tasks/oldTask";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import {useSelector} from "react-redux"
import axios from 'axios';

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>oOo<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

function Telephone({ socket }) {

  // let [cases, setCases] = useState([]);
  let [caseSubjects, setCaseSubjects] = useState([]);
  let [claimedCase, setClaimedCase] = useState(null);
  let [sum, setSum] = useState(0);
  let [newCasesFlag, setNewCasesFlag] = useState(false);
  let [cases, setCases] = useState([]);
  let [counter, setCounter] = useState([]);
  // let [newArray,setNewArray]=useState([])
  let [fixedFlag, setfixedFlag] = useState(false);
  const [fixedArray, setFixedArray] = React.useState([]);
  // import {store} from "../../"

  const data = useSelector(state => state)
  console.log('data',data);


  let newCasesHandler = () => {
    setSum(0);
    setNewCasesFlag(true);
    setCounter([])
    setfixedFlag(false);
  }

  let flagsHandeler = () => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    setNewCasesFlag(false);
    setfixedFlag(true);
    console.log('fixedFlag', fixedFlag);
    console.log('0000000', fixedArray);
    console.log('cases',cases);
  }

  useEffect( () => {

    async function name() {

      let telephoneData= await axios.get('http://localhost:3500/telephoneTicket')
      console.log('telephoneData',telephoneData);
    }
    
    name()
  
  }, [data]);

  

  // let clearAll = () => {
  //   socket.emit('deleteAll', 'Telephone');
  // }

  const fixedIssues = (value, index) => {
    socket.emit('telephoneDeleteCase', value);
    setFixedArray((oldValue) => [...oldValue, value]);
    let removed = cases.splice(index, 1);
    setCases([...cases]);
  }

  

  return (
    <div>
      <h2> Telephone Department Employee Dashboard</h2>
          {/* <Button onClick={clearAll} variant="danger">Clear Server</Button> */}
      <GridContainer>
        <GridItem >
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger" style={{ cursor: "pointer" }}>
                <h2><Badge onClick={newCasesHandler} bg="Dark">{counter.length}</Badge></h2>
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <div>
                <LocalOffer />
                New Cases
              </div>
              <div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success" style={{ cursor: "pointer" }} onClick={flagsHandeler} >
                <h2><Badge onClick={newCasesHandler} bg="Dark">{fixedArray.length}</Badge></h2>
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <div>
                <DateRange />
                Fixed issues
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      {newCasesFlag && <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Cases"
            headerColor="info"
            tabs={[
              {
                tabName: `${cases.length} un-processed`,
                tabContent: (
                  <Tasks
                    checkedIndexes={[]}
                    tasksIndexes={cases}

                    tasks={cases} // array in here
                    socket={socket}
                    fixedIssues={fixedIssues}

                  />
                )
              },
            ]} />
        </GridItem>
      </GridContainer>}

     {fixedFlag && <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="success">
            <h4>Fixed Cases</h4>
          </CardHeader>
          <CardBody>
            <Table>
              <TableBody>
                {fixedArray.map((value, index) => {
                  return (
                    <TableRow>
                      <TableCell><strong class="font-weight-bold">{index + 1}</strong></TableCell>
                      <TableCell><strong class="font-weight-bold">Customer Name</strong> <br /> {value.obj.service.customerName}<br/><small style={{ color: "gray" }}>{value.obj.time}</small></TableCell>
                      <TableCell><strong class="font-weight-bold">Phone Number</strong> <br /> {value.obj.service.phoneNumber}</TableCell>
                      <TableCell><strong class="font-weight-bold">Subject</strong> <br /> {value.obj.service.subject}</TableCell>
                      <TableCell><strong class="font-weight-bold">Description</strong> <br /> {value.obj.service.description}</TableCell>
                      </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </GridItem>}
    </div >
  );
}

export default Telephone;







// {fixedFlag && <Col xs={6}>
// <Table striped bordered hover striped bordered hover variant="success">
//   <tbody>
//     {fixedArray.map((value, index) => {
//       return (
//         <tr>
//           <th>{index + 1}</th>
//           <td><strong class="font-weight-bold">Customer Name</strong> <br /> {value.obj.service.customerName}</td>
//           <td><strong class="font-weight-bold">Phone Number</strong> <br /> {value.obj.service.phoneNumber}</td>
//           <td><strong class="font-weight-bold">Subject</strong> <br /> {value.obj.service.subject}</td>
//           <td><strong class="font-weight-bold">Description</strong> <br /> {value.obj.service.description}</td>
//         </tr>)
//     })}
//   </tbody>
// </Table>
// </Col>}


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

  //   return () => {
  //     socket.off('message', messageListener);
  //     socket.off('deleteMessage', deleteMessageListener);
  //   };
  // }, [socket]);

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
