import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _default = { id: null }

const sessionReducer = (state = _default, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newState = { id: action.currentUser.id}
            return merge({}, state, newState);
        case LOGOUT_CURRENT_USER:
            return _default;
        default:
            return state
    }
}

export default sessionReducer;