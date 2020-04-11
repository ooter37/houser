import React from "react";
import { Link, Route, Switch } from "react-router-dom"
import store, {CLEAR} from '../../store'

import StepOne from './Steps/StepOne'
import StepTwo from './Steps/StepTwo'
import StepThree from './Steps/StepThree'


export default class Wizard extends React.Component {
constructor() {
  super()
  this.clear = this.clear.bind(this)
}
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
<Switch>

          <Route path='/wizard/step1' render={() => <StepOne clear={this.clear}/>}/>
          <Route path='/wizard/step2' component={StepTwo}/>
          <Route path='/wizard/step3' component={StepThree}/>
</Switch>

      </div>
    );
  }
}
