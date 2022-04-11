import { type } from '@testing-library/user-event/dist/type'
import React, { Component } from 'react'
import Confirmation from './Confirmation'
import PersonalDetails from './PersonalDetails'
import Success from './Success'
import TypeOfUser from './TypeOfUser'
import UserDetails from './UserDetails'

export default class Registration extends Component {

  // zaboravili smo u modelu godinu rodjenja korisnika
  state = {
      step: 1,
      type: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      birthday: '',
      country: '',
      city: '',
      street: '',
      phoneNumber: '',   
  }

  prevStep = () => {
      const { step } = this.state
      this.setState({ step: step - 1 })
  }

  nextStep = () => {
      const { step } = this.state
      this.setState({ step: step + 1 })
  }

  setType = (type) => {
    this.setState({})
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }


  render() {
    const { step } = this.state
    const { type, email, password, firstName, lastName, birthday, country, city, street, phoneNumber } = this.state
    const values = {type, email, password, firstName, lastName, birthday, country, city, street, phoneNumber }

    switch (step) {
      case 1:
        return (
          <TypeOfUser
            nextStep = { this.nextStep }
            handleChange = { this.handleChange }
            values = { values }
          />
        )
      case 2:
        return (
          <UserDetails
            nextStep = { this.nextStep }
            handleChange = { this.handleChange }
            values = { values }
          />
        )
      case 3:
        return (
          <PersonalDetails
            nextStep = { this.nextStep }
            handleChange = { this.handleChange }
            values = { values }
          />
        )
      case 4:
        return (
          <Confirmation
            nextStep = { this.nextStep }
            handleChange = { this.handleChange }
            values = { values }
        />
        )
      case 5:
        return (
          <Success />
        )

      default:

    }

  }
}
