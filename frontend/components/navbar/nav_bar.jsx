import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: 'hidden',
        }

        this.dropDownClick = this.dropDownClick.bind(this);
    }


dropDownClick() {

    if (this.state.toggle === 'show') {
        this.setState({ toggle: 'hidden' })
    } else {
        this.setState({ toggle: 'show' });
        document.getElementById("user-dropdown").classList.toggle("show");

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
}
render() {
    let toggle = 'hidden'
    let content;
    if (this.props.currentUser) {
        // debugger
        content = (
                <div className="greet-intro">
                    <button onClick={this.dropDownClick} className="user-button">Hi, {this.props.currentUser.fname}
                        <i className="fa fa-caret-down"> </i>
                    </button>
                    <div id="user-dropdown" className={`dropdown-content ${toggle}`}>
                        <div className="triangle"></div>
                        <ul className="drop-down-list">
                            <li><a href="#" onClick={() => this.props.logout().then(this.setState({ toggle: 'hidden' }))}>Sign out</a></li>
                            <li> <a href="#" onClick={() => this.props.logout().then(this.setState({ toggle: 'hidden' }))}>My Profile</a></li>
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
    }
    return (
        <>
        <div className="static-nav">
        <ul className="logo-links">
            <li>
                <a href="/">
                    <div className='logo'></div>
                </a>
            </li>
            <li>
                <a href="">
                    <h1 className="title">OpenMesa</h1>
                </a>
            </li>
        </ul> 
            <div>{content}</div>
        </div>
        </>
    )
    }
    
}

export default Navbar;