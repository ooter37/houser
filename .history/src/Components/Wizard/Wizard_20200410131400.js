import React from "react";
import { Link } from "react-router-dom"
import axios from 'axios'

export default class Wizard extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      redirect: false
    };
    this.addHouse = this.addHouse.bind(this)
  }
   
  addHouse() {
      axios.post('/api/house', {
          name: this.state.name,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip
      })
  }

  nameChangeHandler(e) {
    this.setState({
      name: e.target.value,
    });
  }
  addressChangeHandler(e) {
    this.setState({
      address: e.target.value,
    });
  }
  cityChangeHandler(e) {
    this.setState({
      city: e.target.value,
    });
  }
  stateChangeHandler(e) {
    this.setState({
      state: e.target.value,
    });
  }
  zipChangeHandler(e) {
    this.setState({
      zip: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Cancel</Link>
        <input
          name="house-name"
          type='text'
          value={this.state.name}
          onChange={(e) => this.nameChangeHandler(e)}
          placeholder="Name"
        />

        <input
          name="address"
          type='text'
          value={this.state.address}
          onChange={(e) => this.addressChangeHandler(e)}
          placeholder="Address"
        />

        <input
          name="city"
          type='text'
          value={this.state.city}
          onChange={(e) => this.cityChangeHandler(e)}
          placeholder="City"
        />

        <input
          name="state"
          type='text'
          value={this.state.state}
          onChange={(e) => this.stateChangeHandler(e)}
          placeholder="State"
        />

        <input
          name="zip"
          type='text'
          value={this.state.zip}
          onChange={(e) => this.zipChangeHandler(e)}
          placeholder="Zip Code"
        />
        <button onClick={() => {
            this.addHouse()
            this.props.history.push('/')
            this.props.getHouses()
        }
    }
        >Complete</button>
      </div>
    );
  }
}
