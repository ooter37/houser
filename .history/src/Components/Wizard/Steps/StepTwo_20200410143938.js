import React from "react";
import {Link} from 'react-router-dom'
import store, {STEP_TWO} from '../../../store'

export default class StepTwo extends React.Component {
  constructor() {
    super();
    const reduxState = store.getState()
    this.state = {
      img: reduxState.img
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        img: reduxState.img
      })
    })
  }

  imgChangeHandler(e) {
    this.setState({
      img: e.target.value,
    });
  }

  nextStep() {
    store.dispatch({
        type: STEP_ONE,
        payload: this.state
    })
}

  render() {
    return (
      <div>
        <input
          name="img"
          type="text"
          value={this.state.img}
          onChange={(e) => this.imgChangeHandler(e)}
          placeholder="Image"
        />
        <Link to="/wizard/step1">
            Previous Step
        </Link>
        <Link to="/wizard/step3">
            Next Step
        </Link>
      </div>
    );
  }
}
