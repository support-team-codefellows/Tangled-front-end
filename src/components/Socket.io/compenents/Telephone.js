// import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button } from 'react-bootstrap'
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3500";

import Icon from "@material-ui/core/Icon";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody.js";

import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import { bugs, website, server } from "variables/general.js";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>oOo<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

function Telephone({ socket }) {

  let [cases, setCases] = useState([]);
  let [caseSubjects, setCaseSubjects] = useState([]);
  let [claimedCase, setClaimedCase] = useState(null);
  let [sum, setSum] = useState(0);
  let [newCasesFlag, setNewCasesFlag]=useState(false);
  
  useEffect(() => {
    socket.on("telephoneIssue", (payload) => {
      setSum(sum++);
      setCases(oldCases => [ payload,...oldCases ]);
      setCaseSubjects(oldSubjects => [ payload.obj.service.subject,...oldSubjects ]);
    });
  }, [socket]);

  let newCasesHandler = () => {
    setSum(0);
    setNewCasesFlag(true);
  }

  let clearAll = () => {
    socket.emit('deleteAll', 'Telephone');
  }

  return (
    <div>
      <Button onClick={clearAll} variant="danger">Clear Server</Button>

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger"  style={{ cursor: "pointer"}}>
                <h2>
                  <Badge onClick={newCasesHandler} bg="Dark">{sum}</Badge>
                </h2>
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
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p>Followers</p>
              <h3>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div>
                <Update />
                Under Processing
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p>Revenue</p>
              <h3>$34,245</h3>
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
            title="Telephone Department Cases"
            headerColor="primary"
            tabs={[
              {
                tabName: "New",
                tabContent: (
                  <Tasks
                    checkedIndexes={[]}
                    tasksIndexes={[]}
                    tasks={caseSubjects} // array in here
                  />
                ),
              },
              {
                tabName: "Claimed",
                tabContent: (
                  <Tasks
                    checkedIndexes={[]}
                    tasksIndexes={[]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Fixed",
                tabContent: (
                  <Tasks
                    checkedIndexes={[]}
                    tasksIndexes={[]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        {claimedCase && <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4>{claimedCase.subject}</h4>
              <p>{claimedCase.customerName}</p>
            </CardHeader>
            <CardBody>{claimedCase.description}</CardBody>
          </Card>
        </GridItem>}
      </GridContainer> }
    </div>
  );
}

export default Telephone;

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
