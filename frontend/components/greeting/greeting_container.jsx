import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

export const mSP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

export const mDP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mSP, mDP)(Greeting);