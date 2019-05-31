import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: 'hidden',
        }

        this.dropDownClick = this.dropDownClick.bind(this);
    }

    dropDownClick() {
        if (this.state.toggle === 'hidden') {
            this.setState( {toggle: 'show'} )
        }   else {
            this.setState( {toggle: 'hidden' } );
        }

        // document.getElementById("user-dropdown").classList.toggle("show");

        window.onclick = (e) => {
            if (!e.target.matches('.user-button')) {
                let dropDowns = document.getElementsByClassName("dropdown-content");
                let i;
                for (i = 0; i < dropDowns.length; i++) {
                    let openDropdown = dropDowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.add('hidden');
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    }

    render() {
        // debugger
        let toggle = this.state.toggle;

        let content;
        if (this.props.currentUser) {
            content = (
                <div className="greet-intro">
                    {/* <h1 className="greet-h1">Hi, {this.props.currentUser.fname}</h1> */}
                    <button onClick={this.dropDownClick} className="user-button">Hi, {this.props.currentUser.fname} 
                         <i className="fa fa-caret-down"></i>
                    </button>
                        <div id="user-dropdown" className={`dropdown-content ${toggle}`}>
                            {/* <a href="#" onClick={() => this.props.logout()}>My Profile</a>
                            <a href="#" onClick={() => this.props.logout()}>My Dining History</a>
                            <a href="#" onClick={() => this.props.logout()}>My Saved Restaurants</a> */}
                            <a href="#" onClick={() => this.props.logout()}>Sign out</a>
                        </div>
                    {/* <button className="greet-button" onClick={() => this.props.logout()}> Logout </button> */}
               </div>
            )
        } else {
            content = (
                <nav className="greet-intro">
                    <button className="signup-button" onClick={() => this.props.openModal('signup')}> Sign up  </button>

                    <button className="login-button" onClick={() => this.props.openModal('login')} > Login </button>
                </nav>
            )
        }``

        return (
            <>
                {content}
            </>
            
        )
    }

}

export default Greeting;