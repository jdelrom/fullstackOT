import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../../actions/restaurant_actions'
import RestShowNav from './restaurant_show_nav';

export const mSP = (state, ownProps) => {
    // debugger
    return (
        {
            restaurant: state.entities.restaurants[ownProps.match.params.id] || {}
        }
    )

}

export const mDP = (dispatch) => ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
})

export default withRouter(connect(mSP, mDP)(RestShowNav));