import React from 'react'
import {Link} from 'react-router-dom'

export default class Wizard extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    nameChangeHandler(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
        <div>
            <Link to='/'>Cancel</Link>
            <input
            name='name'
            value={this.state.name}
            onChange={e => this.nameChangeHandler(e)}
            placeholder='Name'
            >Name</input>
            <input>Address</input>
            <input>City</input>
            <input>State</input>
            <input>Zip Code</input>
        </div>
        )
    }
}