
import { Form, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { io } from 'socket.io-client';

function Customer() {

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`https://project401.herokuapp.com/`);
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

  const submitButton =  () => {
    console.log('inputField', inputField);

     socket.emit('customerFrontEvent', inputField)
  }


  // useEffect(() => {


  // }, [socket]);




  return (
    <div>

      <input
        type="text"
        name="customerName"
        onChange={inputsHandler}
        placeholder="Your Name"
        value={inputField.customerName} />
      <br />

      <input
        type="text"
        name="phoneNumber"
        onChange={inputsHandler}
        placeholder="phoneNumber"
        value={inputField.phoneNumber} />
      <br />

      <input
        type="text"
        name="subject"
        onChange={inputsHandler}
        placeholder="subject"
        value={inputField.subject} />
      <br />
      
      <select id="department" name="department" onChange={inputsHandler}>
        <option >.........</option>
        <option value="OnSite">OnSite</option>
        <option value="Telephone">Telephone</option>
        <option value="LiveChat">LiveChat</option>
      </select>
      <br />

      <input
        type="text"
        name="description"
        onChange={inputsHandler}
        placeholder="description"
        value={inputField.description} />
      <br />

      <button onClick={submitButton}>Submit</button>


      {/* <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}

    </div>




  )




}

export default Customer;