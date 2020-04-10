import React from "react";
import { Link, Route } from "react-router-dom"

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
        <Switch>
          <Route path='/wizard/step1' component={StepOne}/>
          <Route path='/wizard/step2' component={StepTwo}/>
          <Route path='/wizard/step3' component={StepThree}/>
        </Switch>
      </div>
    );
  }
}
