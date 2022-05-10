import { Component } from "react"
import AddCottage from "./AddCottage"

export default class NewCottage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cottageName: '',
            country: '',
            city: '',
            street: '',
            description: '',
            numOfRooms: '',
            capacity: '',
            regulations: '',
            price: '',
            fee: '',
            images: '',
            // dodatne usluge,

            formErrors: {
                cottageName: '', country: '', city: '', street: '', numOfRooms: '', 
                capacity: '', price: '', fee: ''
            },
            cottageNameValid: {enable: false, value: false},
            countryValid: {enable: false, value: false},
            cityValid: {enable: false, value: false},
            streetValid: {enable: false, value: false},
            numOfRoomsValid: {enable: false, value: false},
            capacityValid: {enable: false, value: false},
            priceValid: {enable: false, value: false},
            feeValid: {enable: false, value: false},

            formValid: false,
        }
    }

    handleChange = input => e => {
        this.validateField(input, e.target.value)
        this.setState({ [input]: e.target.value })
    }

    handleImages = input => e => {
        this.setState({[input]: e.target.files})
    }

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors
        let cottageNameValid = this.state.cottageNameValid
        let countryValid = this.state.countryValid
        let cityValid = this.state.cityValid
        let streetValid = this.state.streetValid
        let numOfRoomsValid = this.state.numOfRoomsValid
        let capacityValid = this.state.capacityValid
        let priceValid = this.state.priceValid
        let feeValid = this.state.feeValid

        switch(fieldName) {
					case 'cottageName':
						value = value.trim()
						cottageNameValid.enable = true
						cottageNameValid.value = value.length > 0
						fieldValidationErrors.cottageName = cottageNameValid.value ? '' : 'Field cannot be empty'
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
					case 'numOfRooms':
						value = value.trim()
						numOfRoomsValid.enable = true
						numOfRoomsValid.value = value.match(/^[1-9]\d*$/i)
						fieldValidationErrors.numOfRooms = numOfRoomsValid.value ? '' : 'Invalid field'
						break
					case 'price':
						value = value.trim()
						priceValid.enable = true
						priceValid.value = value.match(/^[1-9]\d*$/i)
						fieldValidationErrors.price = priceValid.value ? '' : 'Invalid field'
						break
					case 'fee':
						value = value.trim()
						feeValid.enable = true
						feeValid.value = value.match(/^[1-9]\d*$/i)
						fieldValidationErrors.fee = feeValid.value ? '' : 'Invalid field'
						break
					case 'capacity':
						value = value.trim()
						capacityValid.enable = true
						capacityValid.value = value.match(/^[1-9]\d*$/i)
						fieldValidationErrors.capacity = capacityValid.value ? '' : 'Invalid field'
						break
					default:
						break
        }

				this.setState({
					formErrors: fieldValidationErrors,
					cottageNameValid: cottageNameValid,
					countryValid: countryValid,
        	cityValid: cityValid,
        	streetValid: streetValid,
					numOfRoomsValid: numOfRoomsValid,
					priceValid: priceValid,
					feeValid: feeValid,
					capacityValid: capacityValid,
				}, this.validateForm)
    }

		validateForm = () => {
			this.setState({ formValid: this.state.cottageNameValid.value && this.state.countryValid.value && this.state.cityValid.value &&
				this.state.streetValid.value && this.state.numOfRoomsValid.value && this.state.priceValid.value && this.state.feeValid.value && 
				this.state.capacityValid.value })
		}

    render() {
			const { cottageName, country, city, street, description, numOfRooms, capacity, regulations, price, fee, images, 
				formErrors, cottageNameValid, streetValid, cityValid, countryValid, numOfRoomsValid, priceValid, capacityValid, feeValid, formValid } = this.state
			const values = { cottageName, country, city, street, description, numOfRooms, capacity, regulations, price, fee, images }
			const validation = { formErrors, cottageNameValid, countryValid, cityValid, streetValid, numOfRoomsValid, priceValid, capacityValid, feeValid, formValid }
			
			return(
					<AddCottage
							user = { this.props.user }
							values = { values }
							validation = { validation}
							handleChange = {this.handleChange}
							handleImages = {this.handleImages}
					/>
			)
    }
}