import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(key) {
        return (e) => {
            return this.setState({ [key]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        let errors;
        if (this.props.errors >= 1) {
            return this.props.errors.map((error, index) => {
                return <li key={index}> {error} </li>
            })
        }
        return (
            <>
                <header>Sign Up</header>
                <br />
                <Link to='/login'>Login</Link>
                <br />
                <br />

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Email" onChange={this.handleInput('email')}/>
                    <br/>
                    <input type="password" placeholder="password" onChange={this.handleInput('password')}/>
                    <br/>
                    <input type="submit" value="Sign In"/>
                </form>
            </> 
            )   
        }
}
export default SessionForm;