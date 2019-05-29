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
                <>
                    <h1>Welcome {this.props.currentUser.fname}</h1>
                    <button onClick={() => this.props.logout()}> Logout </button>
                </>
            )
        } else {
            content = (
                <>
                    <Link to="/signup">Signup</Link>
                    <br />
                    <Link to="/login">Login</Link>
                </>
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