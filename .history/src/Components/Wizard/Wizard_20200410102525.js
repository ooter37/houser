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
            zip: ''
        }
    }

    nameChangeHandler(e) {
        this.setState({
            name: e.target.value
        })
    }
    addressChangeHandler(e) {
        this.setState({
            address: e.target.value
        })
    }
    cityChangeHandler(e) {
        this.setState({
            city: e.target.value
        })
    }
    stateChangeHandler(e) {
        this.setState({
            state: e.target.value
        })
    }
    zipChangeHandler(e) {
        this.setState({
            zip: e.target.value
        })
    }

    render() {
        return (
        <div>
            <Link to='/'>Cancel</Link>
            <input
            name='house-name'
            value={this.state.name}
            onChange={e => this.nameChangeHandler(e)}
            placeholder='Name'
            >Name</input>
            <input
            name='address'
            value={this.state.name}
            onChange={e => this.addressChangeHandler(e)}
            placeholder='Address'
            >Address</input>
            <input
            name='city'
            value={this.state.name}
            onChange={e => this.cityChangeHandler(e)}
            placeholder='City'
            >City</input>
            <input
            name='state'
            value={this.state.name}
            onChange={e => this.stateChangeHandler(e)}
            placeholder='State'
            >State</input>
            <input
            name='zip'
            value={this.state.name}
            onChange={e => this.zipChangeHandler(e)}
            placeholder='Zip Code'
            >Zip Code</input>
        </div>
        )
    }
}