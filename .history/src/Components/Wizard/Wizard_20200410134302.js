import React from "react";
import { Link, Route } from "react-router-dom"
import axios from 'axios'
import StepOne from './Steps/StepOne'
import StepTwo from './Steps/StepTwo'
import StepThree from './Steps/StepThree'


export default class Wizard extends React.Component {
  constructor() {
    super();

  }
   


  render() {
    return (
      <div>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}
