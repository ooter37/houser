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
    render() {
        return (
        <div>
            <Link to='/'>Cancel</Link>
            <input>Name</input>
            <input>Address</input>
            <input>City</input>
            <input>State</input>
            <input>Zip Code</input>
        </div>
        )
    }
}