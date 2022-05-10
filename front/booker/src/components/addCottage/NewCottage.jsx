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
            fee: '',
            images: '',
            // dodatne usluge,
        }
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    handleImages = input => e => {
        this.setState({[input]: e.target.files})
    }

    render() {
        const { cottageName, country, city, street, description, numOfRooms, capacity, regulations, price, fee, images } = this.state
        const values = {cottageName, country, city, street, description, numOfRooms, capacity, regulations, price, fee, images }
        return(
            <AddCottage
                user={ this.props.user }
                values={ values }
                handleChange = {this.handleChange}
                handleImages = {this.handleImages}
            />
        )
    }
}  