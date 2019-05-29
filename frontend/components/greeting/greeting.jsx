import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        // debugger
        let content;
        if (this.props.currentUser) {
            content = (
                <div className="greet-intro">
                    <h1 className="greet-h1">Welcome {this.props.currentUser.fname}</h1>
                    <button className="greet-button" onClick={() => this.props.logout()}> Logout </button>
               </div>
            )
        } else {
            content = (
                <nav className="greet-intro">
                    <button onClick={() => this.props.openModal('signup')}> Sign up  </button>

                    <button onClick={() => this.props.openModal('login')} > Login </button>
                </nav>
            )
        }

        return (
            <>
                {content}
            </>
            
        )
    }

}

export default Greeting;