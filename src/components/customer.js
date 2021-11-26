
import {Form,Button} from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {io} from 'socket.io-client';

function Customer() {

    const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:3500/`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  


    const [inputField , setInputField] = useState({
        Customer_Name: '',
        department: '',
        Proplem_description: '',
        phone_Number:''
    })

    const inputsHandler = (e) =>{
        setInputField( {...inputField,[e.target.name]: e.target.value} )
    }

    const submitButton =async () =>{
        console.log('inputField',inputField);

       await socket.emit('customerFrontEvent',inputField)
    }


    // useEffect(() => {

  
    // }, [socket]);




    return (
        <div>

            <input 
            type="text" 
            name="Customer_Name" 
            onChange={inputsHandler} 
            placeholder="Your Name" 
            value={inputField.Customer_Name}/>

            <br/>

            <input 
            type="text" 
            name="department" 
            onChange={inputsHandler} 
            placeholder="department" 
            value={inputField.department}/>

            <br/>

            <input 
            type="text" 
            name="Proplem_description" 
            onChange={inputsHandler} 
            placeholder="Proplem_description" 
            value={inputField.Proplem_description}/>

            

            <br/>

            <input 
            type="text" 
            name="phone_Number" 
            onChange={inputsHandler} 
            placeholder="phone_Number" 
            value={inputField.phone_Number}/>

            <button onClick={submitButton}>Submit Now</button>




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