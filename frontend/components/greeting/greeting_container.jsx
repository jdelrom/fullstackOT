import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

export const mSP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

export const mDP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(mSP, mDP)(Greeting);