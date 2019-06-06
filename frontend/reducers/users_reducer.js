import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/reservation_actions';
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
            const nwInfo = {[action.reservation.restaurant_id]: action.reservation.id }
            const nwState = {[action.reservation.user_id]: {reservations: nwInfo }}
            return merge({}, state, nwState)
        case REMOVE_RESERVATION:
            debugger
            const nState = merge({}, state);
            
        default:
            return state 
    }
}

export default usersReducer;