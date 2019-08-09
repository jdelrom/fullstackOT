import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRestaurant, fetchRestaurants, zomatoRestaurants } from '../../actions/restaurant_actions';
import { fetchReview } from '../../actions/review_actions';
import { fetchReservation } from '../../actions/reservation_actions';
import { openModal } from '../../actions/modal_actions';
import RestaurantShow from './restaurant_show';

export const mSP = (state, ownProps) => {
    
    if (Object.values(state.entities.restaurants).length === 0) {
            return null
    } else {
            return (
                {
                    restaurant: state.entities.restaurants[ownProps.match.params.id],
                    reservations: state.entities.restaurants[ownProps.match.params.id].reservations,
                    reviews: state.entities.restaurants[ownProps.match.params.id].reviews,
                    favorites: state.entities.restaurants[ownProps.match.params.id].favorites,
                    currentUser: state.session.id
                }
            )
        }
}

export const mDP = (dispatch) => ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchReview: (id) => dispatch(fetchReview(id)),
    fetchReservation: (id) => dispatch(fetchReservation(id)),
    zomatoRestaurants: () => dispatch(zomatoRestaurants()),
    openModal: (modal, review) => dispatch(openModal(modal, review))
})

export default withRouter(connect(mSP, mDP)(RestaurantShow));