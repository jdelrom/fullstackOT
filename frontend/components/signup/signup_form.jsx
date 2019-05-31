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
            this.props.closeModal();
            this.props.signUp(newState)
        }
        // this.props.signUp(this.state);
    }

    render() {
        // debugger
        // const span = span = document.getElementsByClassName("close")[0];
        let errors;
        if (this.props.errors) {
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
                    <input type="text" placeholder="First Name *"
                        onChange={this.handleInput('fname')}
                    />
                   
                    <input type="text" placeholder="Last Name *"
                        onChange={this.handleInput('lname')}
                    />
                   
                    <input type="email" placeholder="Enter email *" 
                        onChange={this.handleInput('email')}
                    />
                   
                    <input type="password" placeholder="Enter password *"
                        onChange={this.handleInput('password')}
                    />
                   
                    <input type="password" placeholder="Re-enter password *"
                        onChange={this.handleInput('confirmPassword')}
                    />
                    <input id='signup-submit' type="submit" value="Create Account"/>                
                </form>

            </div>
        )

    }
}

export default SignupForm;