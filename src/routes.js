import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Wizard from './Components/Wizard/Wizard'
import Dashboard from './Components/Dashboard/Dashboard'
import StepOne from '../src/Components/Wizard/Steps/StepOne'
import StepTwo from '../src/Components/Wizard/Steps/StepTwo'
import StepThree from '../src/Components/Wizard/Steps/StepThree'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/wizard' component={Wizard}/>
        <Route exact path='/wizard/step1' component={StepOne}/>
        <Route exact path='/wizard/step2' component={StepTwo}/>
        <Route exact path='/wizard/step3' component={StepThree}/>
    </Switch>
)