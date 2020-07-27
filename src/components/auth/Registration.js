import React, { Component } from 'react'
import axios from 'axios'

export default class Registration extends Component {

    state = {

        email: "", 
        password: "", 
        passwordConfirmation: "",
        registrationErrors: ""
    }



    handleSubmit = (event) => {
        const {
            email, 
            password, 
            passwordConfirmation
        } = this.state

        // look at axios post request
        axios.post("http://localhost:3001/registrations", {
            user: {
                email: email, 
                password: password, 
                password_confirmation: passwordConfirmation
            }
        }, 
        { withCredentials: true }
        ).then(response  => {
            if (response.data.status === "created"){
                this.props.handleSuccessfulAuth(response.data)
            }
            
            console.log("Registraion response", response)
        }).catch(error => {
            console.log("Registration error", error) 
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
                    <input type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={this.state.passwordConfirmation} onChange={event => this.handleChange(event)}/>
                    <input type ="submit"/>
                    
                </form>
            </div>
        )
    }
}
