import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';


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
        const { password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            this.props.displayConfirmError(["Passwords do not match"])
        } else {
            const newState = merge({}, this.state);
            delete newState[confirmPassword];
            this.props.signUp(newState).then(() => this.props.closeModal())
        }
        // this.props.signUp(this.state);
    }

    render() {
        let emailInput = "email-signup";
        let passwordInput = "password-signup";
        let fnameInput = "fname";
        let lnameInput = "lname";
        let confirmPasswordInput = "confirm-password-signup"
        // debugger
        // const span = span = document.getElementsByClassName("close")[0];
        let errors;
        if (this.props.errors.length > 0) {
            emailInput = "errors-render"
            passwordInput = "errors-render"
            fnameInput = "errors-render"
            lnameInput = "errors-render"
            confirmPasswordInput = "errors-render"
            errors = this.props.errors.map( (error, index) => {
                return <li key={index}> {error} </li>
            })
        }
        // let wModal = document.getElementById('signup');
        // window.onClick = (e) => {
        //     if (e.target === wModal) {
        //         wModal.style.display = "none";        
        //     }
        // }
        return (
            <div id="signup" className="signup">

                <form className="signupform" onSubmit={this.handleSubmit}>
                    <ul className="errors">
                        {errors}
                    </ul>
                    <header className="signup-header">Welcome to openMesa! </header>
                    
                    <input className={fnameInput} type="text" placeholder="First Name *"
                        onChange={this.handleInput('fname')}
                    />
                   
                    <input className={lnameInput} type="text" placeholder="Last Name *"
                        onChange={this.handleInput('lname')}
                    />
                   
                    <input className={emailInput} type="email" placeholder="Enter email *" 
                        onChange={this.handleInput('email')}
                    />
                   
                    <input className={passwordInput} type="password" placeholder="Enter password *"
                        onChange={this.handleInput('password')}
                    />
                   
                    <input className={confirmPasswordInput} type="password" placeholder="Re-enter password *"
                        onChange={this.handleInput('confirmPassword')}
                    />
                    <button id='signup-submit' type="submit" >Create Account </button>              
                </form>

            </div>
        )

    }
}

export default SignupForm;