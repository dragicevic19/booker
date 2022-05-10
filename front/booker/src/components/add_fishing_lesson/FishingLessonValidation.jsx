import AddFishingLesson from "./AddFishingLesson"
import React, { Component } from 'react'

export default class Validation extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        country: '',
        city: '',
        address: '',
        price: '',
        fee: '',
        description: '',
        rules: '',
        includedEquipment: '',
        maxNumAttendants: '',
        additionalServices: '',
        images: '',
  
        formErrors: {name: '', city: '', address: '', price: '', fee: '', description: '', rules: '', maxNumAttendants: ''},
        nameValid: {enable: false, value: false},
        countryValid: {enable: false, value: false},
        cityValid: {enable: false, value: false},
        addressValid: {enable: false, value: false},
        priceValid: {enable: false, value: false},
        feeValid: {enable: false, value: false},
        descriptionValid: {enable: false, value: false},
        rulesValid: {enable: false, value: false},
        maxNumAttendantsValid: {enable: false, value: false},
  
        formValid: false,
        }
    }

    //niz za fishing equipment (checkbox)

        checkboxes = [
        {
            name: 'fishing-stick',
            checked: false,
            label: 'Fishing stick',
        },
        {
            name: 'worms',
            checked: false,
            label: 'Worms',
        },
        {
            name: 'catfish-net',
            checked: false,
            label: 'Catfish net',
        },
        {
            name: 'fish-food',
            checked: false,
            label: 'Fish food',
        },
        {
            name: 'parasol',
            checked: false,
            label: 'Parasol',
        }
    ]; 


    //cuvanje slika

    handleImages = input => e => {
        this.setState({[input]: e.target.files})
    }

    fetchAdditionalServices = async() => {
        const res = await fetch('http://localhost:5000/additionalServices')
        const data = await res.json()
    
        return data
    }

    fetchEquipment = async() => {
        const res = await fetch('http://localhost:5000/includedEquipment')
        const data = await res.json()
    
        return data
    }

    handleChange = input => e => {
        this.validateField(input, e.target.value)
        this.setState({ [input]: e.target.value })
    }

    validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors
    let nameValid = this.state.nameValid
    let countryValid = this.state.countryValid
    let cityValid = this.state.cityValid
    let addressValid = this.state.addressValid
    let priceValid = this.state.priceValid
    let feeValid = this.state.feeValid
    let descriptionValid = this.state.descriptionValid
    let rulesValid = this.state.rulesValid
    let maxNumAttendantsValid = this.state.rulesValid

    switch(fieldName) {
        case 'name':
            nameValid.enable = true
            if (!value.match(/^[a-z ,.'-]+$/i)) {
                nameValid.value = false
                fieldValidationErrors.name = nameValid.value ? '' : 'Invalid input'
                break
            }
            nameValid.value = value.length > 0
            fieldValidationErrors.name = nameValid.value ? '' : 'Field cannot be empty'
            break

        case 'country':
            countryValid.enable = true
            countryValid.value = value.length > 0
            fieldValidationErrors.country = countryValid.value ? '' : 'Invalid input'
            break
            
        case 'city':
            cityValid.enable = true
            cityValid.value = value.match(/^[a-zA-Z\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/)
            if (!cityValid.value) {
                fieldValidationErrors.city = cityValid.value ? '' : 'Invalid input'
                break
            }
            cityValid.value = value.length > 0
            fieldValidationErrors.city = cityValid.value ? '' : 'Field cannot be empty'
        break
        case 'address':
            value = value.trim();
            addressValid.enable = true
            addressValid.value = value.length > 0
            fieldValidationErrors.address = addressValid.value ? '' : 'Field cannot be empty'
            break
        
        case 'price':
            priceValid.enable = true
            priceValid.value = value.length > 0
            fieldValidationErrors.price = priceValid.value ? '' : 'Invalid input'
                break

        case 'fee':
            feeValid.enable = true
            feeValid.value = value.length > 0
            fieldValidationErrors.fee = feeValid.value ? '' : 'Invalid input'
                break
        
        case 'description':
            value = value.trim();
            descriptionValid.enable = true
            descriptionValid.value = value.length > 0
            fieldValidationErrors.description = descriptionValid.value ? '' : 'Field cannot be empty'
            break
            
        case 'rules':
            value = value.trim();
            rulesValid.enable = true
            rulesValid.value = value.length > 0
            fieldValidationErrors.rules = rulesValid.value ? '' : 'Field cannot be empty'
            break

        case 'maxNumAttendants':
            maxNumAttendantsValid.enable = true
            maxNumAttendantsValid.value = value.match(/^(\d|1\d|2[0-3])(\\d{1,2})?$/)
            if (!maxNumAttendantsValid.value) {
                fieldValidationErrors.maxNumAttendants = maxNumAttendantsValid.value ? '' : 'Invalid input'
                break
            }
            maxNumAttendantsValid.value = value.length > 0
            fieldValidationErrors.city = maxNumAttendantsValid.value ? '' : 'Field cannot be empty'
        
        default:
        break
    }

    this.setState({ 
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        countryValid: countryValid,
        cityValid: cityValid,
        addressValid: addressValid,
        priceValid: priceValid,
        feeValid: feeValid,
        descriptionValid: descriptionValid,
        rulesValid: rulesValid,
        maxNumAttendantsValid: maxNumAttendantsValid
        }, this.validateForm)
    } 

    validateForm = () => {
    this.setState({ formValid: this.state.nameValid.value && this.state.countryValid.value && this.state.cityValid.value && this.state.addressValid.value && 
                    this.state.priceValid.value && this.state.feeValid.value && this.state.descriptionValid.value && this.state.rulesValid.value && this.state.maxNumAttendantsValid.value})
    }

    render() {
        const { name, country, city, address, price, fee, description, rules, includedEquipment, maxNumAttendants, additionalServices, images, 
                formErrors, nameValid, countryValid, cityValid, addressValid, priceValid, feeValid, descriptionValid,
                rulesValid, maxNumAttendantsValid, formValid } = this.state
        const values = { name, country, city, address, price, fee, description, rules, includedEquipment, maxNumAttendants, additionalServices, images }
        const validation = { formErrors, nameValid, countryValid, cityValid, addressValid, priceValid, feeValid, descriptionValid,
            rulesValid, maxNumAttendantsValid, formValid }
        
        values.additionalServices = this.fetchAdditionalServices();
        values.includedEquipment = this.fetchEquipment();

          return (
            <AddFishingLesson
              user={ this.props.user }
              handleChange = { this.handleChange }
              handleImages = {this.handleImages}
              values = { values }
              validation = { validation }
            />
           )
      }
  
}