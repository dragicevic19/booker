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
      emailValid: false,
      passwordValid: false,
      repPasswordValid: false,
      firstNameValid: false,
      lastNameValid: false,
      countryValid: false,
      cityValid: false,
      streetValid: false,
      phoneNumberValid: false,

      formValid: false
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
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email address is invalid'
        break
      case 'password':
        passwordValid = value.length >= 8
        fieldValidationErrors.password = passwordValid ? '' : 'must be at least 8 characters long'
        break
      case 'repPassword':
          repPasswordValid = value === this.state.password
          fieldValidationErrors.repPassword = repPasswordValid ? '' : 'passwords do not match'
          break
      case 'firstName':
        firstNameValid = value.length > 0
        fieldValidationErrors.firstName = firstNameValid ? '' : 'field cannot be empty'
        break
      case 'lastName':
        lastNameValid = value.length > 0
        fieldValidationErrors.lastName = lastNameValid ? '' : 'cannot be empty'
        break
      case 'country':
        countryValid = value.length > 0
        fieldValidationErrors.country = countryValid ? '' : 'cannot be empty'
        break
      case 'city':
        cityValid = value.length > 0
        fieldValidationErrors.city = cityValid ? '' : 'cannot be empty'
        break
      case 'street':
        streetValid = value.length > 0
        fieldValidationErrors.street = streetValid ? '' : 'cannot be empty'
        break
      case 'phoneNumber':
        phoneNumberValid = value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i)
        fieldValidationErrors.phoneNumber = phoneNumberValid ? '' : 'invalid format'
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
        phoneNumberValid: phoneNumberValid
      }, this.validateForm)
  } 

  validateForm = () => {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.repPasswordValid && 
                    this.state.firstNameValid && this.state.lastNameValid && this.state.countryValid && this.state.cityValid &&
                    this.state.streetValid && this.state.phoneNumberValid })
  }

  render() {
    const { step } = this.state
    const { type, email, password, repPassword, firstName, lastName, birthday, country, city, street, phoneNumber, explanation,
            formErrors, emailValid, passwordValid, repPasswordValid, firstNameValid, lastNameValid,
            countryValid, cityValid, streetValid, phoneNumberValid, formValid } = this.state
    const values = { type, email, password, repPassword, firstName, lastName, birthday, country, city, street, phoneNumber, explanation }
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
           validation = { validation }
         />
        )
      case 3:
        if (values.type === 'Client') {
          return (
            <Confirmation
              prevStep= { this.prevStep }
              nextStep = { this.nextStep }
              handleChange = { this.handleChange }
              values = { values }
            />
          )
        } else {
          return (
            <Success  
              values = { values }
            />
          )
        }
      default:
    }
  }
}
