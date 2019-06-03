import React from 'react';

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
            <div className='rest-show-div'>
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
                    <div className='rest-reservation-container'>
                        <h2>Make a Reservation</h2>
                        <div className="rest-reserve-options">
                            <label for="rest-reserve-party"></label>
                            <select name="rest-reserve-party" id="rest-reserve-party" className="rest-reserve-party">
                                <option value="2 people">For 2 people</option>
                            </select>
                            <label for="rest-reserve-date">Date</label>
                            <input className='rest-reserve-date' type="date"/>
                            <label for="rest-reserve-time">Time</label>
                            <input className="rest-reserve-time" type="time"/>
                           
                        </div>

                            <div className="rest-show-photos">
                                <h2>Photos</h2>
                            </div>
                            <div className="rest-show-menu">
                                <h2>Menu</h2>
                            </div>
                    </div>
                </div>
                <div className="rest-show-review">
                    <h2>What People Are Saying</h2>
                </div>

            </div>
        )
    }
}

export default RestaurantShow;