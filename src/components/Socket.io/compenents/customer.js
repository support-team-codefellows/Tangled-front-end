
import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Button} from 'react-bootstrap';
import { io } from 'socket.io-client';
import { Notification, toaster, Drawer } from 'rsuite';
import {useDispatch} from "react-redux"
import "rsuite/dist/rsuite.min.css";
import Telephone from 'components/Socket.io/compenents/Telephone';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody.js";
import GridItem from "components/Grid/GridItem";
import Dashboard from 'views/Dashboard/Dashboard';
import axios from "axios"
import store from '../../../store';

function Customer() {
  const [socket, setSocket] = useState(null);
  const [open, setOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [telephoneClaimed, setTelephoneClaimed] = useState(false);
  const [onSiteClaimed, setOnSiteClaimed] = useState(false);
  const [onSiteResponse, setOnSiteResponse] = useState({});
 

 

 

  const [inputField, setInputField] = useState({
    customerName: '',
    phoneNumber: '',
    subject: '',
    department: '',
    description: '',
    status: 'unprocessed'
  })

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  const submitButton = async() => {
    console.log('inputField', inputField);
   

    if (inputField.department==="Telephone") {

      await axios.post('http://localhost:3500/telephoneTicket',inputField)

     
      store.dispatch({
        type:"TELEPHONETICKET"
      })

      


      
    }

    if (inputField.department==="OnSite") {

      await axios.post('/onSiteTicket',inputField)

    }

    setShowNotification(true)
    setTimeout(() => { setShowNotification(false) }, 2000);
  }



  // if (socket) {
  //   // socket.on('claimCase', (payload) => {
  //   //     setTelephoneClaimed(true);
  //   //   });
  //   socket.on('serverOnSiteResponse', (appointment) => {
  //     setOnSiteClaimed(true);
  //     setOnSiteResponse(appointment);
  //   });
  // }

  return (


    <Container>
        <Container>
      <h2>Customer Portal</h2><br /><br />
      <p>Click the following button to submit an issue:</p><br />
      <Button onClick={() => setOpen(true)}> Click </Button><br /><br /><br />

      <Drawer size='sm' placement='right' open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Submit an Issue</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"
                name="customerName"
                onChange={inputsHandler}
                value={inputField.customerName} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text"
                name="phoneNumber"
                onChange={inputsHandler}
                value={inputField.phoneNumber} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text"
                name="subject"
                onChange={inputsHandler}
                value={inputField.subject} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="floatingSelectGrid" >
              <Form.Label>Department</Form.Label> {'   '}
              <Form.Select size="lg" aria-label="Default select example" id="department" name="department" onChange={inputsHandler}>
                <option value="">....</option>
                <option value="OnSite">OnSite</option>
                <option value="Telephone">Telephone</option>
                <option value="LiveChat">LiveChat</option>
              </Form.Select>
            </Form.Group>

            <Form.Group  className="mb-3">
              <Form.Label>Description</Form.Label>
              
              <Form.Control as="textarea" rows={3} 
              name="description"
              onChange={inputsHandler}
              value={inputField.description} 
              />
            </Form.Group>

            <Button variant="info" onClick={submitButton}>Submit</Button>

          </Form>
        </Drawer.Body>
      </Drawer>
      </Container>
      {showNotification && <div className="notification-container">
        <Notification closable type="success" header="Success">
          Thank you for contacting us! <br />
          Your message has been sent successfully and an employee will contact with you soon.
        </Notification>
      </div>}

      {!onSiteClaimed && <GridItem xs={12} sm={6} md={5}>
        <Card>
          <CardHeader color="success"> Response </CardHeader>
          <CardBody>
            <strong class="font-weight-bold">Status: </strong>Your ticket hasn't been claimed yet<br />
          </CardBody>
        </Card>
      </GridItem>}

      {onSiteClaimed && <GridItem xs={12} sm={6} md={5}>
        <Card>
          <CardHeader color="success"> Response </CardHeader>
          <CardBody>
            <strong class="font-weight-bold">Day: </strong>{onSiteResponse.day}<br />
            <strong class="font-weight-bold">Hour: </strong>{onSiteResponse.hour}<br />
            <strong class="font-weight-bold">Notes: </strong>{onSiteResponse.notes}<br />
          </CardBody>
        </Card>
      </GridItem>}

      {telephoneClaimed && <GridItem xs={12} sm={6} md={5}>
        <Card>
          <CardHeader color="success"> Response </CardHeader>
          <CardBody>
            <strong class="font-weight-bold">Status: </strong>Your ticket has been claimed<br />
          </CardBody>
        </Card>
      </GridItem>}
      <Dashboard/>

    </Container >
  
  )
}

export default Customer;