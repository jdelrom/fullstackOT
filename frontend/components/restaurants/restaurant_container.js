import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchRestaurants, fetchRestaurants, zomatoRestaurants} from '../../actions/restaurant_actions';
import Restaurant from './restaurant';

export const mSP = (state, ownProps) => {   
    
    return {
        restaurants: Object.values(state.entities.restaurants),    
    }
}

export const mDP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    searchRestaurants: (search) => dispatch(searchRestaurants(search)),
    zomatoRestaurants: () => dispatch(zomatoRestaurants())
})

export default withRouter(connect(mSP, mDP)(Restaurant));