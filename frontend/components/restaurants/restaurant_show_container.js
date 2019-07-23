import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRestaurant, zomatoRestaurants } from '../../actions/restaurant_actions';
import { fetchReview } from '../../actions/review_actions';
import { fetchReservation } from '../../actions/reservation_actions'
import RestaurantShow from './restaurant_show';

export const mSP = (state, ownProps) => {
    
    return (
        {
            restaurant: state.entities.restaurants[ownProps.match.params.id] || {},
            reservations: state.entities.restaurants.reservations,
            reviews: state.entities.reviews,
            favorites: state.entities.favorites
        }
    )
    
}

export const mDP = (dispatch) => ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
    fetchReview: (id) => dispatch(fetchReview(id)),
    fetchReservation: (id) => dispatch(fetchReservation(id)),
    zomatoRestaurants: () => dispatch(zomatoRestaurants())
})

export default withRouter(connect(mSP, mDP)(RestaurantShow));