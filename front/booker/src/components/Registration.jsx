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
    this.setState({ [input]: e.target.value })
  }


  render() {
    const { step } = this.state
    const { type, email, password, repPassword, firstName, lastName, birthday, country, city, street, phoneNumber, explanation } = this.state
    const values = {type, email, password, repPassword, firstName, lastName, birthday, country, city, street, phoneNumber, explanation }

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
