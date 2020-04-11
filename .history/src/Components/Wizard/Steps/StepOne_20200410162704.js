import React from "react";
import { Link } from "react-router-dom";
import store, { STEP_ONE } from "../../../store";

export default class StepOne extends React.Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip,
    };
    this.nextStep = this.nextStep.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip,
      });
    });
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

  nextStep() {
    store.dispatch({
      type: STEP_ONE,
      payload: this.state,
    });
  }

  render() {
    return (
      <div>
          <button onClick={() => {
              this.props.clearButton()
              const reduxState = store.getState();
              console.log(reduxState);
              }}>
            Clear
          </button>
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
          <button
            onClick={() => {
              this.nextStep();
              const reduxState = store.getState();
              console.log(reduxState);
            }}
          >
            Next Step
          </button>
        </Link>
      </div>
    );
  }
}
