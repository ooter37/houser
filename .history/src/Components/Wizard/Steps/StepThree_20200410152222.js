import React from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {STEP_THREE, CLEAR} from '../../../store'


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
    const reduxState = store.getState()
    console.log(`name ${reduxState.name}`)
    console.log(`address ${reduxState.address}`)
    console.log(`city ${reduxState.city}`)
    console.log(`state ${reduxState.state}`)
    console.log(`zip ${reduxState.zip}`)
    console.log(`img ${reduxState.img}`)
    console.log(`mortgage ${this.state.mortgage}`)
    console.log(`rent ${this.state.rent}`)
    axios.post('/api/house', {
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip,
        img: reduxState.img,
        mortgage: this.state.mortgage,
        rent: this.state.rent
    })
    this.clear()
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
  
  clear() {
    store.dispatch({
      type: CLEAR
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
          const reduxState = store.getState()
          console.log(reduxState)
            this.addHouse()
            this.props.history.push('/')
        }
    }
        >Complete</button>
      </div>
    );
  }
}
