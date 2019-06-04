import React from 'react';
import NavbarContainer from '../navbar/nav_bar_container';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchRestaurant(this.props.match.params.id)
    }

    render() {
        // debugger
        return (
           
                
            <div className='rest-show-parent'>
                <div className='rest-show-div'>
                    <NavbarContainer />
                    <div className="rest-show-nav-container">
                        <nav className='rest-show-nav'>
                            <ul className='rest-show-ul-nav'>
                                <li>
                                    Overview
                                </li>
                                <li>
                                    Photos
                                </li>
                                <li>
                                    Menu
                                </li>
                                <li>
                                    Reviews
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="restaurant-info">
                        <h1>{this.props.restaurant.name}</h1>
                        <ul>
                            <li>{this.props.restaurant.tag}</li>
                        </ul>
                        <div className="rest-aboutme">
                            <p className='p-aboutme'>
                                {this.props.restaurant.aboutme}
                            </p> 
                        </div>
                            <div className="rest-show-photos">
                                <h2>Photos</h2>
                            </div>
                            <div className="rest-show-menu">
                                <h2>Menu</h2>
                            </div>              
                    </div>
                    
                    <div className="rest-show-review">
                        <h2>What People Are Saying</h2>
                    </div>

                </div>
                <div className='rest-reservation-container'>
                        <div className='rest-show-h2'><h2>Make a reservation</h2></div> 
                    <div className="rest-reserve-options">
                        <div className='rest-reserve-party-container'>
                            <label for="rest-reserve-party-select">Party Size</label>
                            <select name="rest-reserve-party-select" id="rest-reserve-party-select" className="rest-reserve-party-select">
                                <option value="2 people">For 2</option>
                            </select>
                        </div>
                        <dir className="rest-reserve-datetime-container">
                            <div className="rest-reserve-date-container">  
                                <label for="rest-reserve-date">Date</label>
                                <input className='rest-reserve-date' type="date" />
                            </div> 
                            <div className="rest-reserve-time-container">
                                <label for="rest-reserve-time">Time</label>
                                <select className="rest-reserve-time" > 
                                    <option value="7pM">7:00 PM</option>
                                </select>
                             </div>
                        </dir>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantShow;