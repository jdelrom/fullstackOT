import React from 'react';
import NavbarContainer from '../navbar/nav_bar_container';
import ReservationForm from '../reservations/reservation_form';
import RestShowNavContainer from './restaurant_background/restaurant_show_nav_container';
import CreateReviewForm from '../reviews/create_review';
import Footer from '../footer/footer';
import Reviews from '../reviews/reviews';
import Favorites from '../favorites/favorite';
import { times } from 'lodash';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
        this.props.fetchRestaurants();
        
    }

    render() {
        const {reviews, restaurant, loggedIn} = this.props;
        
        if (this.props.restaurant === undefined) {
            return null
        }
        
        let amountStars = 0;
        let faStars;
        
        if (this.props.reviews !== undefined) {
            debugger
            let reviewArr = Object.values(reviews);
            for (let i = 0; i < reviewArr.length; i++) {
                debugger
                amountStars += reviewArr[i].rating
            }
            amountStars = Math.floor(amountStars / reviewArr.length)
            
            faStars = _.times(amountStars, () => {
                return (<i className="fa fa-star"></i>)
        })}
        let form = <ReservationForm restaurant={this.props.restaurants} />;
        // let faStars = _.times(this.props.restaurant.rating, () => {
        //     return (<i className="fa fa-star"></i>)
        // })
        // let favorites = <Favorites restaurant={this.props.restaurants} />
        let bookings;
        
        if (this.props.restaurant !== undefined) {
            if (this.props.restaurant.reservations) {
                if (this.props.restaurant.reservations.length >= 0 )
                    bookings = <li>Bookings at this restaurant today: {this.props.restaurant.reservations.length}</li>
            } else {
                return null // bookings = <li>Bookings at this restaurant today: 0; </li>
            }}
        
        let reviewList;
        if (this.props.reviews !== undefined) {
            let reviewItems = Object.values(this.props.reviews)
            reviewList = reviewItems.map(item => {
                return (
                    
                    <Reviews review={item} 
                        currentUser={this.props.currentUser}
                        openModal={this.props.openModal} 
                        />
                )
            })
        } else {
            reviewList = <div></div>
        }
        let createReview;
        if (loggedIn) {
            createReview = (
                <div className='create-review-container'>
                    <p>Want to write a review?</p>
                    <button className='create-review-button'
                        onClick={() => this.props.openModal('createReview')}>
                            Create Review
                    </button>
                </div>
            )
        }
        debugger
        return (
           <>
            <div className='rest-show-uncle'>
                <RestShowNavContainer />
                <div className='rest-show-parent'>
                    <NavbarContainer />
                        <div className='rest-show-div'>
                            <div className="rest-show-nav-container">
                                <nav className='rest-show-nav'>
                                    <ul className='rest-show-ul-nav'>
                                        <li key='1'>
                                          
                                        <label htmlFor="restaurant-info">
                                            Overview
                                        </label>
                                         
                                        </li>
                                        <li key='2'>
                                            Photos
                                        </li>
                                        <li key='3'> 
                                            Menu
                                        </li>
                                        <li key='4'>
                                            Reviews
                                        </li>
                                        <li key='5'>
                                            {bookings}
                                        </li>
                                        <li key='6'>
                                            <Favorites />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div id='restaurant-info' name='restaurant-info' className="restaurant-info">
                                <h1 className="restaurant-info-name">{this.props.restaurant.name}</h1>
                                <ul>
                                    <li key='6'>
                                        {faStars}
                                        {/* <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o" aria-hidden="true"></i> */}
                                    </li>
                                    <li key='7' className="restaurant-info-tag">
                                        <p><i className="far fa-comment-alt"></i>
                                        </p>
                                        <p> {Object.values(this.props.reviews).length} Reviews</p>
                                        <p><i className="fas fa-utensils"></i></p>               
                                        <p>{this.props.restaurant.tag}</p>    
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
                            <div className='show-review-form'>
                               {createReview}
                            </div>
                            <div className='review-list-container'>
                                {reviewList}
                            </div>
                        </div>
                    {form}
                    
                </div>
            <Footer />
            </div>
            </>
        )
    }
}

export default RestaurantShow;
