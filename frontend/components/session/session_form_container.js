import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, receiveSessionErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

export const mSP = (state, ownProps) => ({
    errors: state.errors.session
})

export const mDP = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors))
})

export default withRouter(connect(mSP, mDP)(SessionForm));
