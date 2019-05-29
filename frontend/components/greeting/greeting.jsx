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
                <header className="greet-intro">
                    <Link className="greet-signup" to="/signup">Sign up  </Link>

                    <Link className="greet-links" to="/login"  >Login</Link>
                </header>
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