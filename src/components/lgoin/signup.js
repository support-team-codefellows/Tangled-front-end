// import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from './login';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import MenuItem from "@material-ui/core/MenuItem";
export default function SignIn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MenuItem
        onClick={handleShow}
      
      >
      
        Sign up
      </MenuItem>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form /> </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Sign up
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
// render(<Example/>);




























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