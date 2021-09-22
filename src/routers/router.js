import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Music from '../pages/Music'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/music" component={Music}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;
