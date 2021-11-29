
import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import axios from 'axios';
import store from '../../store';
class SignInForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      loggedin:'',
      Username:'',
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }


  handleSubmit = async (e)=>{
    e.preventDefault();
    let username = this.state.email;
    let password = this.state.password;
    let lastname =e.target.name.value;
    let url= 'https://project401.herokuapp.com/sign-in'
  await axios.post(url,{},{
    auth: {
      username: username,
      password: password,
    }
  }).then((result)=>{
    this.setState({
      loggedin: result.data
    });
    const user = result.data;
    localStorage.setItem('user', JSON.stringify(user) )
    store.dispatch({
      type: 'SET_USER',
      payload: user
    })
    store.dispatch({
      type: 'SET_SHOW',
      payload : false
    })
  })
 


  }

  handleUserInput = (e) => { 
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
    () => { this.validateField(name, value) });
  }
  validateField(fieldName, value) {
  
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    console.log(`Email ${emailValid}`);
    console.log(`password ${passwordValid}`);


    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {

    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }
  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  
  render () {
    return (
      <form  onSubmit={this.handleSubmit}>
         
          <label htmlFor="">Username</label>
          <input type="text"  className="form-control" name="name"
            placeholder="Username"/>
      
     
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}/>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign in</button>
      </form>
    )
  }
}

export default SignInForm;



















// import React, { Component } from "react";
// import LoginModal from "react-login-modal-sm";

 
//  class Login extends Component {

//   state = {
//     showModal: false
//   };
 
//   toggleModal = () => {
//     this.setState({ showModal: !this.state.showModal });
//   };
 
//   handleLoginWithFacebook = () => {
//     // Do something when 'Login with Facebook' is clicked
//     console.log("Login with Facebook...");
//   };
 
//   handleSignupByEmail = () => {
//     // Do something when 'Signup by email' is clicked
//     console.log("Sign up by email...");
//   };
 
//   render() {
//     const customUsernameRegex = /^[a-zA-Z0-9_]{5,}/;
 
//     return (
//       <div className="App">
//         <h1>react-login-modal-sm example</h1>
 
//         <LoginModal
//           showModal={this.state.showModal}
//           toggleModal={this.toggleModal}
//           onLoginFacebook={this.handleLoginWithFacebook}
//           onSignupEmail={this.handleSignupByEmail}
//           usernameRegex={customUsernameRegex}
//         />
 
//         <button
//           className="test-btn btn btn-primary btn-lg"
//           onClick={this.toggleModal}
//         >
//           Log in
//         </button>
//       </div>
//     );
//   }
// }
// export default Login