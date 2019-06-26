import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { fetchReview } from '../../actions/review_actions';
import { fetchReservation } from '../../actions/reservation_actions'
import RestaurantShow from './restaurant_show';

export const mSP = (state, ownProps) => {
    // debugger
    return (
        {
            restaurant: state.entities.restaurants[ownProps.match.params.id] || {},
            reservations: state.entities.restaurants.reservations,
            reviews: state.entities.restaurants.reviews
        }
    )
    
}

export const mDP = (dispatch) => ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
    fetchReview: (id) => dispatch(fetchReview(id)),
    fetchReservation: (id) => dispatch(fetchReservation(id))
})

export default withRouter(connect(mSP, mDP)(RestaurantShow));