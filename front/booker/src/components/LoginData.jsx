import React, { Component } from 'react'
import LoginForm from './LoginForm'


export default class Login extends Component {
  
    state = {
        email: '',
        password: '',
  
  
        formErrors: {email: '', password: ''},
        emailValid: {enable: false, value: false},
        passwordValid: {enable: true, value: true},
        
  
        formValid: false,
    }
  

 
  handleChange = input => e => {
    console.log(e.target.value)
    this.validateField(input, e.target.value)
    this.setState({ [input]: e.target.value })
  }



  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid
   
    switch(fieldName) {
      case 'email':
        value = value.trim();
        emailValid.enable = true
        emailValid.value = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid.value ? '' : 'Email address is invalid'
        break
      case 'password':
        passwordValid.enable = true
        break
        
      default:
        break
    }

    this.setState({ 
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
       
      }, this.validateForm)
  } 

  validateForm = () => {
    this.setState({ formValid: this.state.emailValid.value && this.state.passwordValid.value})
  }

  render() {

    const { email, password, formValid } = this.state
  
    const values = { email, password, }
    //const validation = { formErrors, emailValid, passwordValid, formValid }
    return (
        <LoginForm
        onLogin = {this.props.onLogin}
        handleChange = { this.handleChange }
        values = { values }
      //  validation = { validation }
        />)
  }
}
