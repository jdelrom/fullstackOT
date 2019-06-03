import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchRestaurants} from '../../actions/restaurant_actions';
import Restaurant from './restaurant';

export const mSP = (state, ownProps) => ({   
    restaurants: Object.values(state.entities.restaurants),    
})

export const mDP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
})

export default withRouter(connect(mSP, mDP)(Restaurant));