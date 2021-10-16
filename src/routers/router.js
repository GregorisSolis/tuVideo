import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Music from '../pages/Music'
import Watch from '../pages/Watch'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/music" component={Music}/>
      <Route exact path="/watch" component={Watch}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;
