import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from "./Home"
import Dashboard from "./Dashboard"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
       
        <Switch>
          <Route exact path ={"/"} component={ Home } /> 
          <Route exact path ={"/dashboard"} component={ Dashboard } />
        
        </Switch>

       
      </div>
    );
  }
}
