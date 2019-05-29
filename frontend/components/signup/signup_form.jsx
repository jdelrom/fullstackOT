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
        let errors;
        if (this.props.errors >= 1) {
            return this.props.errors.map( (error, index) => {
                return <li key={index}> {error} </li>
            })
        }
        return (
            <>
                <header>Sign Up</header>
                <br/>
                <Link to='/login'>Login</Link>
                <br/>
                <br/>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="First Name *"
                        onChange={this.handleInput('fname')}
                    />
                    <br/>
                    <input type="text" placeholder="Last Name *"
                        onChange={this.handleInput('lname')}
                    />
                    <br/>
                    <input type="text" placeholder="Enter email *" 
                        onChange={this.handleInput('email')}
                    />
                    <br/>
                    <input type="password" placeholder="Enter password *"
                        onChange={this.handleInput('password')}
                    />
                    <br/>
                    <input type="password" placeholder="Re-enter password *"
                        onChange={this.handleInput('password')}
                    />
                    <br/>
                    <input type="submit" value="Create Account"/>                
                </form>

                <ul>
                    {errors}
                </ul>
            </>
        )

    }
}

export default SignupForm;