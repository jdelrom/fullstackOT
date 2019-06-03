import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Navbar from './nav_bar';


export const mSP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

export const mDP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSP, mDP)(Navbar);