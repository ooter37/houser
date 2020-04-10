import React from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {STEP_THREE} from '../../../store'


export default class StepThree extends React.Component {
  constructor() {
    super();
    const reduxState = store.getState()
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };
    this.addHouse = this.addHouse.bind(this)
    this.nextStep = this.nextStep.bind(this)
  }
  addHouse() {
    axios.post('/api/house', {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        img: this.state.img,
        mortgage: this.state.mortgage,
        rent: this.state.rent
    })
}
  mortgageChangeHandler(e) {
    this.setState({
      mortgage: e.target.value,
    });
  }
  rentChangeHandler(e) {
    this.setState({
        rent: e.target.value,
    });
  }

  nextStep() {
    store.dispatch({
      type: STEP_THREE,
      payload: this.state
    })
  }
  

  render() {
    return (
      <div>
        <input
          name="mortgage"
          type="text"
          value={this.state.mortgage}
          onChange={(e) => this.mortgageChangeHandler(e)}
          placeholder="Mortgage"
        />
        <input
          name="rent"
          type="text"
          value={this.state.rent}
          onChange={(e) => this.rentChangeHandler(e)}
          placeholder="Rent"
        />
        <Link to="/wizard/step2">
            Previous Step
        </Link>
        <button onClick={() => {
            this.addHouse()
            this.props.history.push('/')
        }
    }
        >Complete</button>
      </div>
    );
  }
}
