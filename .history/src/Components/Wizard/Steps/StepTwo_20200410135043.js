import React from "react";
import {Link} from 'react-router-dom'


export default class StepTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };
  }

  imgChangeHandler(e) {
    this.setState({
      img: e.target.value,
    });
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
      </div>
    );
  }
}
