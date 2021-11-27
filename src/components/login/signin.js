// import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from './signinForm';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import MenuItem from "@material-ui/core/MenuItem";
import store from '../../store';
import {connect} from 'react-redux';


function SignIn(props) {


  const handleClose = () =>  store.dispatch({
    type: 'SET_SHOW_FLAG',
    payload : false
  });
  const handleShow = () =>  store.dispatch({
    type: 'SET_SHOW_FLAG',
    payload : true
  });
const show = props.modalFlag
  return (
    <>
      <MenuItem
        onClick={handleShow} >
      Sign in
      </MenuItem>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form/></Modal.Body>
        <Modal.Footer>
       
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
// render(<Example/>);

export default connect(function(state) {
  return state
})(SignIn)


























// class LoginModal extends Component {
//   constructor(props) {
//     super(props)
//     this.state={
//       show: false}
//   }
//  handleClose = () => this.setState({ show: false });
//  handleShow = () => this.setState({ show: true });

//   render () {
//   return(
//       <>
//         <Button variant="primary" onClick={this.handleShow}>

//         </Button>

//         <Modal show={this.state.show} onHide={this.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body> <Form/>  </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={this.handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
// }
// export default LoginModal