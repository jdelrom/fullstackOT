import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RESERVATION } from '../actions/reservation_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newState = {
                [action.currentUser.id]: action.currentUser
            }
            return merge({}, state, newState)
        case RECEIVE_RESERVATION:
            // debugger
            const nwState = merge({}, state);
            // debugger
            nwState[action.reservation.user_id].reservations = [action.reservation.user_id]
            // debugger
            return merge({}, state, nwState)
        default:
            return state 
    }
}

export default usersReducer;