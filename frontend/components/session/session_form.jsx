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
        this.props.closeModal();
        this.props.login(this.state)
    }

    render() {
        let errors;
        if (this.props.errors >= 1) {
            return this.props.errors.map((error, index) => {
                return <li key={index}> {error} </li>
            })
        }
        return (
            <div className="login-form">

                <form className="session-form" onSubmit={this.handleSubmit}>
                    <header className='login-header'>Please sign in</header>
                    <input type="email" placeholder="Email" onChange={this.handleInput('email')}/>
        
                    <input type="password" placeholder="Password" onChange={this.handleInput('password')}/>
                    <a className="session-link" href="#">Forgot Password?</a>
                    <input id="session-submit" type="submit" value="Sign In"/>
                </form>
            </div>
            )   
        }
}
export default SessionForm;