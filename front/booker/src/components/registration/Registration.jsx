import React, { Component } from 'react'
import Confirmation from './Confirmation'
import Success from './Success'
import TypeOfUser from './TypeOfUser'
import UserDetails from './UserDetails'

export default class Registration extends Component {

  state = {
      step: 1,
      type: '',
      email: '',
      password: '',
      repPassword: '',
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      street: '',
      phoneNumber: '',   
      explanation: '',

      formErrors: {email: '', password: '', repPassword: '', firstName: '', lastName: '',
                  country: '', city: '', street: '', phoneNumber: ''},
      emailValid: {enable: false, value: false},
      passwordValid: {enable: false, value: false},
      repPasswordValid: {enable: false, value: false},
      firstNameValid: {enable: false, value: false},
      lastNameValid: {enable: false, value: false},
      countryValid: {enable: false, value: false},
      cityValid: {enable: false, value: false},
      streetValid: {enable: false, value: false},
      phoneNumberValid: {enable: false, value: false},

      formValid: false,
  }

  prevStep = () => {
      const { step } = this.state
      this.setState({ step: step - 1 })
  }

  nextStep = () => {
      const { step } = this.state
      this.setState({ step: step + 1 })
  }

  setType = (newType) => {
    this.setState({ type: newType})
  }

  handleChange = input => e => {
    this.validateField(input, e.target.value)
    this.setState({ [input]: e.target.value })
  }

  setEmailExistsError = () => {
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    emailValid.enable = true
    emailValid.value = false;
    fieldValidationErrors.email = 'Email already exists in our database'
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid
    }, this.validateForm)
  }

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid
    let repPasswordValid = this.state.repPasswordValid
    let firstNameValid = this.state.firstNameValid
    let lastNameValid = this.state.lastNameValid
    let countryValid = this.state.countryValid
    let cityValid = this.state.cityValid
    let streetValid = this.state.streetValid
    let phoneNumberValid = this.state.phoneNumberValid

    switch(fieldName) {
      case 'email':
        value = value.trim();
        emailValid.enable = true
        emailValid.value = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid.value ? '' : 'Email address is invalid'
        break
      case 'password':
        passwordValid.enable = true
        passwordValid.value = value.length >= 8
        fieldValidationErrors.password = passwordValid.value ? '' : 'must be at least 8 characters long'
        repPasswordValid.value = value === this.state.repPassword
        fieldValidationErrors.repPassword = repPasswordValid.value ? '' : 'passwords do not match'
        break
      case 'repPassword':
        repPasswordValid.enable = true
        repPasswordValid.value = value === this.state.password
        fieldValidationErrors.repPassword = repPasswordValid.value ? '' : 'passwords do not match'
        break
      case 'firstName':
        value = value.trim();
        firstNameValid.enable = true
        if (!value.match(/^[a-z ,.'-]+$/i)) {
          firstNameValid.value = false
          fieldValidationErrors.firstName = firstNameValid.value ? '' : 'Invalid input'
          break
        }
        firstNameValid.value = value.length > 0
        fieldValidationErrors.firstName = firstNameValid.value ? '' : 'Field cannot be empty'
        break
      case 'lastName':
        value = value.trim();
        lastNameValid.enable = true
        lastNameValid.value = value.match(/^[a-z ,.'-]+$/i)
        if (!lastNameValid.value) {
          fieldValidationErrors.lastName = lastNameValid.value ? '' : 'Invalid input'
          break
        }
        lastNameValid.value = value.length > 0
        fieldValidationErrors.lastName = lastNameValid.value ? '' : 'Field cannot be empty'
        break
      case 'country':
        value = value.trim();
        countryValid.enable = true
        countryValid.value = value.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/i)
        if (!countryValid.value) {
          fieldValidationErrors.country = countryValid.value ? '' : 'Invalid input'
          break
        }
        countryValid.value = value.length > 0
        fieldValidationErrors.country = countryValid.value ? '' : 'Field cannot be empty'
        break
      case 'city':
        value = value.trim();
        cityValid.enable = true
        cityValid.value = value.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/i)
        if (!cityValid.value) {
          fieldValidationErrors.city = cityValid.value ? '' : 'Invalid input'
          break
        }
        cityValid.value = value.length > 0
        fieldValidationErrors.city = cityValid.value ? '' : 'Field cannot be empty'
        break
      case 'street':
        value = value.trim();
        streetValid.enable = true
        streetValid.value = value.length > 0
        fieldValidationErrors.street = streetValid.value ? '' : 'Field cannot be empty'
        break
      case 'phoneNumber':
        value = value.trim();
        phoneNumberValid.enable = true
        phoneNumberValid.value = value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i)
        fieldValidationErrors.phoneNumber = phoneNumberValid.value ? '' : 'invalid format'
        break
      
      default:
        break
    }

    this.setState({ 
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        repPasswordValid: repPasswordValid,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        countryValid: countryValid,
        cityValid: cityValid,
        streetValid: streetValid,
        phoneNumberValid: phoneNumberValid,
      }, this.validateForm)
  } 

  validateForm = () => {
    this.setState({ formValid: this.state.emailValid.value && this.state.passwordValid.value && this.state.repPasswordValid.value && 
                    this.state.firstNameValid.value && this.state.lastNameValid.value && this.state.countryValid.value && this.state.cityValid.value &&
                    this.state.streetValid.value && this.state.phoneNumberValid.value })
  }

  render() {
    const { step } = this.state
    const { type, email, password, repPassword, firstName, lastName, country, city, street, phoneNumber, explanation,
            formErrors, emailValid, passwordValid, repPasswordValid, firstNameValid, lastNameValid,
            countryValid, cityValid, streetValid, phoneNumberValid, formValid } = this.state
    const userType = type 
    const values = { email, password, repPassword, firstName, lastName, country, city, street, phoneNumber, explanation }
    const validation = { formErrors, emailValid, passwordValid, repPasswordValid, firstNameValid, lastNameValid,
      countryValid, cityValid, streetValid, phoneNumberValid, formValid }

    switch (step) {
      case 1:
        return (
          <TypeOfUser
            nextStep = { this.nextStep }
            handleChange = { this.handleChange }
            setType = { this.setType }
            values = { values }
          />
        )
      case 2:
        return (
         <UserDetails
           prevStep= { this.prevStep }
           nextStep = { this.nextStep }
           handleChange = { this.handleChange }
           values = { values }
           userType = { userType }
           validation = { validation }
         />
        )
      case 3:
        if (userType === 'Client') {
          return (
            <Confirmation
              prevStep= { this.prevStep }
              nextStep = { this.nextStep }
              handleChange = { this.handleChange }
              values = { values }
              userType = { userType }
            />
          )
        } else {
          return (
            <Success  
              values = { values }
              userType = { userType }
              prevStep = { this.prevStep }
              setEmailExistsError = { this.setEmailExistsError }
            />
          )
        }
      default:
    }
  }
}
