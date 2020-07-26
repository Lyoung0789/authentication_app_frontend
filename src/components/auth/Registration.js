import React, { Component } from 'react'

export default class Registration extends Component {

    state = {
        email: "", 
        password: "", 
        passwordConfirmation: "",
        registrationErrors: ""
    }



    handleSubmit = (event) => {
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
