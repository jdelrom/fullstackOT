import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            toggle: 'hidden',
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
            this.props.login(this.state).then(() => this.props.closeModal())
            // this.props.receiveSessionErrors(this.errors);
    }
    
    render() {
        
        let emailInput = "email-input";
        let passwordInput = "password-input";
        const demoUser = { email: "userdemo@mock.com", password: "123456"}
        let errors;
        if (this.props.errors.length > 0) {
            for (let i = 0; i < this.props.errors.length; i++) {
                if (this.props.errors[i].includes("Email")) {
                    emailInput = "errors-render"
                    
                }
                if (this.props.errors[i].includes('Password')) {
                    passwordInput = "errors-render"
                }
            }
            
            errors = this.props.errors.map((error, index) => {
                return <li key={index}> {error} </li>
            })
        }
        
       
        return (
            <div className="login-form">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <header className='login-header'>Please sign in</header>
                    <ul className="errors">
                        {errors}
                    </ul>
                    <input className={emailInput} type="email" placeholder="Email" onChange={this.handleInput('email')}/>
        
                    <input className={passwordInput} type="password" placeholder="Password" onChange={this.handleInput('password')}/>
                    <a className="session-link" href="#">Forgot Password?</a>
                    <button id="session-submit">Sign In</button>
                    <button id="session-submit" onClick={() => this.props.login(demoUser).then(this.props.closeModal().then(this.setState({toggle: 'hidden'})))}>Demo Login</button>
    
                </form>
            </div>
            )   
        }
    
}
export default SessionForm;