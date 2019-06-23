import React from 'react';
import NavbarContainer from '../navbar/nav_bar_container';
import ReservationForm from '../reservations/reservation_form';
import RestShowNavContainer from './restaurant_background/restaurant_show_nav_container';
import ReviewForm from '../reviews/review_form';
import Footer from '../footer/footer';
import Reviews from '../reviews/reviews';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.id)
        // debugger
    }

    render() {
        // debugger
        let form = <ReservationForm restaurant={this.props.restaurants} />;
        let bookings;
        if (this.props.restaurant) {
            // debugger
            if (this.props.restaurant.reservations) {
                if (this.props.restaurant.reservations.length > 0 )
                bookings = <li>Bookings at this restaurant today: {this.props.restaurant.reservations.length}</li>
            } else {
                return null;
            }
        }
        // debugger
        let reviewList;
        if (this.props.reviews !== undefined) {
            let reviewItems = Object.values(this.props.reviews)
            reviewList = reviewItems.map(item => {
                return (
                    <Reviews review={item} />
                )
            })
        } else {
            reviewList = <div></div>
        } 
        // debugger
        return (
           
            <div className='rest-show-uncle'>
                <RestShowNavContainer />
                <div className='rest-show-parent'>
                    <NavbarContainer />
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
                                        {bookings}
                                    </ul>
                                </nav>
                            </div>
                            <div className="restaurant-info">
                                <h1 className="restaurant-info-name">{this.props.restaurant.name}</h1>
                                <ul>
                                    <li>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        {this.props.restaurant.tag}
                                    </li>
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
                                <h1>What People Are Saying</h1>
                                <h2>Overall ratings and reviews</h2>
                                <h3>Reviews can only be made by diners who have eaten at this restaurant</h3>
                               
                            </div>
                            <div className='show-review-form'>>
                                <ReviewForm />
                            </div>
                            <div className='review-list-container'>
                                {reviewList}
                            </div>
                        </div>
                    {form}
                </div>
                <Footer />
            </div>
        )
    }
}

export default RestaurantShow;
{/* <div className='rest-reservation-container'>
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
</div> */}