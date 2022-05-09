import { Component } from "react"
import AddCottage from "./AddCottage"

export default class NewCottage extends Component {
// this.props.user
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
            fee: ''
            // dodatne usluge,
            // slike
        }
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { cottageName, country, city, street, description, numOfRooms, capacity, regulations, price, fee } = this.state
        const values = {cottageName, country, city, street, description, numOfRooms, capacity, regulations, price, fee }
        return(
            <AddCottage
                user={ this.props.user }
                values={ values }
                handleChange = {this.handleChange}
            />
        )
    }
}  