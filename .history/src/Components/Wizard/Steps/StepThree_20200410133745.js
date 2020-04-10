import React from "react";


export default class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      mortgage: "",
      rent: ''
    };
  }

  mortgageChangeHandler(e) {
    this.setState({
      mortgage: e.target.value,
    });
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
          name="mortgage"
          type="text"
          value={this.state.mortgage}
          onChange={(e) => this.mortgageChangeHandler(e)}
          placeholder="Mortgage"
        />
        <input
          name="mortgage"
          type="text"
          value={this.state.mortgage}
          onChange={(e) => this.imgChangeHandler(e)}
          placeholder="Mortgage"
        />
      </div>
    );
  }
}
