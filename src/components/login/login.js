
import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import {connect} from 'react-redux';
import store from '../../store';
// import './Form.css';
import axios from 'axios';
class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Username:'',
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

//get the state from redux and pass it to the component
  // componentWillMount(){ 
  //   this.setState({
  //     userCount: store.getState().userCount
  //   })
  // }
  handleSubmit = async (e)=>{
    e.preventDefault();
    let userCount= this.props.userCount + 1

    
    let username = this.state.email;
    let password = this.state.password;
    let lastname =e.target.name.value;
    localStorage.setItem('userCount', JSON.stringify(userCount) )
  
    
    let url= 'https://project401.herokuapp.com/signup'
    let obj={username,password,lastname};
   await  axios.post(url,obj).then((result)=>{
      console.log(result.data); 
  })
  store.dispatch({
    type: 'SET_SHOW',
    payload : false
  })

  store.dispatch({
    type: 'SET_USER_COUNT',
    payload : userCount
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
    // console.log(`Email ${emailValid}`);
    // console.log(`password ${passwordValid}`);


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
      <form className="demoForm" onSubmit={this.handleSubmit}>
         
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
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}
export default connect(function(state) {
  return state
})(Form)

