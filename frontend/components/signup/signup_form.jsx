import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.currentUser;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(key) {
        return (e) => {
            return this.setState( { [key]: e.target.value } )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        // const span = span = document.getElementsByClassName("close")[0];
        let errors;
        if (this.props.errors >= 1) {
            return this.props.errors.map( (error, index) => {
                return <li key={index}> {error} </li>
            })
        }
        return (
            <div className="signup">
               
                <form className="signupform" onSubmit={this.handleSubmit}>
                    <header className="signup-header">Welomce to openMesa! </header>
                    <input type="text" placeholder="First Name *"
                        onChange={this.handleInput('fname')}
                    />
                   
                    <input type="text" placeholder="Last Name *"
                        onChange={this.handleInput('lname')}
                    />
                   
                    <input type="text" placeholder="Enter email *" 
                        onChange={this.handleInput('email')}
                    />
                   
                    <input type="password" placeholder="Enter password *"
                        onChange={this.handleInput('password')}
                    />
                   
                    <input type="password" placeholder="Re-enter password *"
                        onChange={this.handleInput('password')}
                    />
                   
                    <input id='signup-submit' type="submit" value="Create Account"/>                
                </form>

                <ul className="errors">
                    {errors}
                </ul>
            </div>
        )

    }
}

export default SignupForm;