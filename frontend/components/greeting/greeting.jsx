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
        let hoy = new Date();
        let toggle = this.state.toggle;
        let content;
        if (this.props.currentUser) {
            content = (
                <div className="greet-intro">
                    <button onClick={this.dropDownClick} className="user-button">Hi, {this.props.currentUser.fname}   
                             <i className="fa fa-caret-down"> </i>
                    </button>
                        <div id="user-dropdown" className={`dropdown-content ${toggle}`}>
                            <div className="triangle"></div>
                           <ul className="drop-down-list">
                               <li><a href="#" onClick={() => this.props.logout()}>Sign out</a></li> 
                               <li> <a href="#" onClick={() => this.props.logout()}>My Profile</a></li>
                                {/* <a href="#" onClick={() => this.props.logout()}>My Dining History</a>
                                <a href="#" onClick={() => this.props.logout()}>My Saved Restaurants</a> */}
                            </ul> 
                        </div>
                    {/* <button className="greet-button" onClick={() => this.props.logout()}> Logout </button> */}
               </div>
            )
        } else {
            content = (
                <nav className="greet-intro">   
                    <button className="signup-button" onClick={() => this.props.openModal('signup')}>Sign up</button>

                    <button className="login-button" onClick={() => this.props.openModal('login')} >Sign in</button>
                </nav>
            )
        }``
        
        // debugger
        return (
            <>
                {content}
                <div className="calendar">
                    <input type="date" id="date" className="date" value={hoy} />
                    <div className="styled-select slate">
                        <select className="time">
                            <option value="7:00PM">7:00 PM</option>
                        </select>
                        <select className="party-size">
                            <option>2 people</option>
                        </select>
                    </div>
                    <input className="search" type="search" />
                    <button className="search-button">Let's go</button>
                </div>
               
            </>
            
        )
    }

}

export default Greeting;