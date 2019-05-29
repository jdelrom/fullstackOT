import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SignupForm from '../signup/signup_form';

export const mSP = (state, ownProps) => ({
    currentUser: {fname: '', lname: '', email: '', password: ''},
    errors: state.errors.session
})

export const mDP = (dispatch) => ({
    signUp: (user) => dispatch(signUp(user))
})

export default withRouter(connect(mSP, mDP)(SignupForm));