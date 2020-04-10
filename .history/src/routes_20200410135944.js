import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Wizard from './Components/Wizard/Wizard'
import Dashboard from './Components/Dashboard/Dashboard'
import StepOne from '../src/Components/Wizard/Steps/StepOne'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/wizard' component={Wizard}/>
        <Route exact path='/wizard/step1' component={StepOne}/>
    </Switch>
)