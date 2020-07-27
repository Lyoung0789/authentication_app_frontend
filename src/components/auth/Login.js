import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {

    state = {

        email: "", 
        password: "", 
        LoginErrors: ""
    }



    handleSubmit = (event) => {
        const {
            email, 
            password
        } = this.state

        // look at axios post request
        axios.post("http://localhost:3001/sessions", {
            user: {
                email: email, 
                password: password 
            }
        }, 
        { withCredentials: true }
        ).then(response  => {
            // console.log("response from login", response)
            if (response.data.logged_in === true){
                this.props.handleSuccessfulAuth(response.data)
            }
            
        }).catch(error => {
            console.log("Login error", error) 
        })
        event.preventDefault()
        console.log("Form submitted")
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={event => this.handleChange(event)}/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={event => this.handleChange(event)}/>
                    
                    <button type="submit">Login</button>
                    
                </form>
            </div>
        )
    }
}
