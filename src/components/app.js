import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from "./Home"
import Dashboard from "./Dashboard"
import axios from 'axios'
import { data } from 'autoprefixer';

export default class App extends Component {

  state ={
    loggedInStatus: "NOT_LOGGED_IN", 
    user: {}
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN", 
      user: data.user
    })

  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  checkLoginStatus = () => {
    console.log("in checkLoginStatus")
    axios.get("http://localhost:3001/logged_in", {withCredentials: true})
    .then(response => {
      if(response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })

      }
      console.log("logged in?", response)
    })
    .catch(error => {
      console.log("check login error", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  render() {
    return (
      <div className='app'>
       
        <Switch>
          <Route exact path ={"/"} render={props => (
            <Home {...props} handleLogout = {this.handleLogout} handleLogin = {this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>
          )} /> 
          <Route exact path ={"/dashboard"} render = {props => (
            <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
          )} />
        
        </Switch>

       
      </div>
    );
  }
}
