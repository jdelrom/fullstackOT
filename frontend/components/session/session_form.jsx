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
        this.props.login(this.state).then(() => this.props.closeModal())
        // this.props.receiveSessionErrors(this.errors);
    }
    
    render() {
        const demoUser = { email: "userdemo@mock.com", password: "123456"}
        let errors;
        if (this.props.errors) {
            errors = this.props.errors.map((error, index) => {
                return <li key={index}> {error} </li>
            })
        }
        // debugger
        return (
            <div className="login-form">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <ul className="errors">
                        {errors}
                    </ul>
                    <header className='login-header'>Please sign in</header>
                    <input type="email" placeholder="Email" onChange={this.handleInput('email')}/>
        
                    <input type="password" placeholder="Password" onChange={this.handleInput('password')}/>
                    <a className="session-link" href="#">Forgot Password?</a>
                    <input id="session-submit" type="submit" value="Sign In"/>
                    <button className="demo-button" onClick={() => this.props.login(demoUser).then(this.props.closeModal())}>Demo Login</button>
    
                </form>
            </div>
            )   
        }
    
}
export default SessionForm;