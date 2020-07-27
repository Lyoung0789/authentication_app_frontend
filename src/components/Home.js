import React, { Component } from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login'
import axios from 'axios'

export default class Home extends Component {

// I dont think i need this, but lets see. 
    constructor(props){
        super(props)
    
    }

    handleSuccessfulAuth = data => {
        console.log("I am from home")
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
        
    }

    handleLogoutClick = () => {
        axios.delete("http://localhost:3001/logout", {withCredentials: true})
        .then(response => {
            this.props.handleLogout()
        })
        .catch(error => {
            console.log("Logout error:", error)
        }
        )
    }


    render(){
        // debugger
        return(
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <button onClick={() => this.handleLogoutClick()}>Logout</button>
                <Registration handleSuccessfulAuth = {this.handleSuccessfulAuth}/>
                <Login handleSuccessfulAuth= {this.handleSuccessfulAuth}/> 
            </div>
        )
    }
}
