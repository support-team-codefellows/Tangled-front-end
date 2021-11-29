
import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { io } from 'socket.io-client';
import { Notification, toaster, Drawer } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

function Customer() {
  const [socket, setSocket] = useState(null);
  const [open, setOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Heroku: https://project401.herokuapp.com/   Localhost: http://localhost:3500/
    const newSocket = io(`http://localhost:3500/`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

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

  const submitButton = () => {
    console.log('inputField', inputField);
    socket.emit('customerFrontEvent', inputField);
    setShowNotification(true)
    setTimeout(()=>{setShowNotification(false)}, 5000);

  }

  return (
    <Container>
      <br /><br />Submit your problem down below: <br /><br />

      <Button onClick={() => setOpen(true)}> Click </Button>

      <Drawer size='lg' placement='right' open={open} onClose={() => setOpen(false)}>
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
              <Form.Label>Department</Form.Label>
              <Form.Select size="lg" aria-label="Default select example" id="department" name="department" onChange={inputsHandler}>
                <option>....</option>
                <option value="OnSite">OnSite</option>
                <option value="Telephone">Telephone</option>
                <option value="LiveChat">LiveChat</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="dark" onClick={submitButton}>Submit</Button>

          </Form>
        </Drawer.Body>
      </Drawer>
      <br/>
      <br/>
      {showNotification && <div className="notification-container">
        <Notification closable type="success" header="Success">
          Thank you for contacting us! <br/>
          Your message has been sent successfully and an employee will contact with you soon. 
        </Notification>
      </div>}

    </Container >

  )
}

export default Customer;