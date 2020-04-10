import React from "react";
import {Link} from 'react-router-dom'
import store from '../../../store'

export default class StepOne extends React.Component {
  constructor() {
    super();
    const reduxState = store.getState()
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state
    };
  }

  componentDidMount() {
      store.subscribe(() => {
          const reduxState = store.getState()
          this.setState({
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state
          })
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
        <input
          name="house-name"
          type="text"
          value={this.state.name}
          onChange={(e) => this.nameChangeHandler(e)}
          placeholder="Name"
        />

        <input
          name="address"
          type="text"
          value={this.state.address}
          onChange={(e) => this.addressChangeHandler(e)}
          placeholder="Address"
        />

        <input
          name="city"
          type="text"
          value={this.state.city}
          onChange={(e) => this.cityChangeHandler(e)}
          placeholder="City"
        />

        <input
          name="state"
          type="text"
          value={this.state.state}
          onChange={(e) => this.stateChangeHandler(e)}
          placeholder="State"
        />

        <input
          name="zip"
          type="text"
          value={this.state.zip}
          onChange={(e) => this.zipChangeHandler(e)}
          placeholder="Zip Code"
        />
        <Link to="/wizard/step2">
            Next Step
        </Link>
      </div>
    );
  }
}
