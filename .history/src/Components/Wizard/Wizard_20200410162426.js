import React from "react";
import { Link, Route, Switch } from "react-router-dom"
import store, {CLEAR} from '../../store'

import StepOne from './Steps/StepOne'
import StepTwo from './Steps/StepTwo'
import StepThree from './Steps/StepThree'


export default class Wizard extends React.Component {

  clear() {
    store.dispatch({
      type: CLEAR
    })
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button onClick={() => this.clear()}>Clear</button>
        </Link>
        <StepOne clearButton={this.clear}/>
<Switch>

          <Route path='/wizard/step1' component={StepOne}/>
          <Route path='/wizard/step2' component={StepTwo}/>
          <Route path='/wizard/step3' component={StepThree}/>
</Switch>

      </div>
    );
  }
}
