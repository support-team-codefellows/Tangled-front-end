// import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Form } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody.js";

import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";

// core components
// import Table from "components/Table/Table.js";
import Tasks from "../../Tasks/oldTask";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import Button from 'rsuite/Button';
import "rsuite/dist/rsuite.min.css";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>oOo<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

function OnSite({ socket }) {

  // let [cases, setCases] = useState([]);
  let [caseSubjects, setCaseSubjects] = useState([]);
  let [claimedCase, setClaimedCase] = useState(null);
  let [sum, setSum] = useState(0);
  let [newCasesFlag, setNewCasesFlag] = useState(false);
  let [cases, setCases] = useState([])
  let [counter, setCounter] = useState([])
  // let [newArray,setNewArray]=useState([])
  let [fixedFlag, setfixedFlag] = useState(false);
  let [fixedArray, setFixedArray] = useState([]);

  let newCasesHandler = () => {
    setSum(0);
    setNewCasesFlag(true);
    setCounter([])
    setfixedFlag(false);
  }

  let flagsHandeler = () => {
    setNewCasesFlag(false);
    setfixedFlag(true);
  }

  useEffect(() => {
    setTimeout(() => {
      socket.emit('getAll', 'OnSite')
    }, 100);

    socket.on("onSiteIssue", (data) => {
      setCases(oldArray => [data, ...oldArray]);
      setCounter(oldArray => [data, ...oldArray]);
      setSum(sum++);
    });

    socket.on("processingStatus", (data) => {
      socket.emit("claimedUserCase", "hi");
    })
  }, [socket]);

  let clearAll = () => {
    socket.emit('deleteAll', 'OnSite');
  }

  const [appointmentField, setAppointmentField] = useState({
    day: '',
    hour: '',
    notes: 'Feel free to contact us if this appointment doesn\'t suit your schedule'
  });

  const inputsHandler = (e) => {
    setAppointmentField({ ...appointmentField, [e.target.name]: e.target.value })
  }

  const submitButton = (claimedCase) => {
    socket.emit('onSiteResponse', appointmentField);
    console.log(claimedCase);
    socket.emit('onSiteDeleteCase', claimedCase);
    setFixedArray((oldValue) => [...oldValue, claimedCase]);
    let removed = cases.splice(cases.indexOf(claimedCase), 1);
    setCases([...cases]);
  }

  return (
    <div>
      <h2> On-Site Department Employee Dashboard</h2>

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
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
                  <Table>
                    <TableBody>
                      {cases.map((value, index) => {
                        return (
                          <TableRow>
                            <TableCell><strong class="font-weight-bold">{index + 1}</strong></TableCell>
                            <TableCell><strong class="font-weight-bold">Customer Name</strong> <br /> {value.obj.service.customerName}<br /><small style={{ color: "gray" }}>{value.obj.time}</small></TableCell>
                            <TableCell><strong class="font-weight-bold">Subject</strong> <br /> {value.obj.service.subject}</TableCell>
                            <TableCell><strong class="font-weight-bold">Status</strong> <br /> {value.obj.service.status}</TableCell>
                            <Button color="cyan" appearance="primary" onClick={() => {setClaimedCase({ ...value }); value.obj.service.status = 'processing'}}>Claim</Button>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                )
              },
            ]} />
        </GridItem>

        {claimedCase !== null && <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose"> {claimedCase.obj.service.customerName} Case Info <br /></CardHeader>
            <CardBody>
              <small style={{ color: "gray" }}>{claimedCase.obj.time}</small><br />
              <strong class="font-weight-bold">Customer Name: </strong>{claimedCase.obj.service.customerName}<br />
              <strong class="font-weight-bold">Phone Number: </strong>{claimedCase.obj.service.phoneNumber}<br />
              <strong class="font-weight-bold">Subject: </strong>{claimedCase.obj.service.subject}<br />
              <strong class="font-weight-bold">Description: </strong>{claimedCase.obj.service.description}<br /><br /><br />

              <strong>Plan Appointment: </strong>
              <Form.Group className="mb-3" controlId="floatingSelectGrid" >
                <Form.Label>Day</Form.Label> {'   '}
                <Form.Select size="lg" id="day" name="day" onChange={inputsHandler} required>
                  {['...', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'].map(day => {
                    return (<option value={day}>{day}</option>)
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="floatingSelectGrid" >
                <Form.Label>Hour</Form.Label> {'   '}
                <Form.Select size="lg" id="hour" name="hour" onChange={inputsHandler} required>
                  {['...', '08:00am', '09:00am', '10:00am', '11:00am', '12:00pm', '01:00pm', '02:00pm', '03:00pm'].map(hour => {
                    return (<option value={hour}>{hour}</option>)
                  })}
                </Form.Select>
              </Form.Group>

              <Button variant="info" color="green" appearance="primary" onClick={()=>submitButton(claimedCase)}>Submit</Button>
            </CardBody>
          </Card>
        </GridItem>}
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
                      <TableCell><strong class="font-weight-bold">Customer Name</strong> <br /> {value.obj.service.customerName}<br /><small style={{ color: "gray" }}>{value.obj.time}</small></TableCell>
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

export default OnSite;
