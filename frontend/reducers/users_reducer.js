import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/reservation_actions';
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions'
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newState = {
                [action.currentUser.id]: action.currentUser
            }
            return merge({}, state, newState)

        case RECEIVE_FAVORITE:
            const newState2 = merge({}, state);
            newState2[action.favorite.user_id].favorites[action.favorite.restaurant_id] = action.favorite.id
            
            return newState2;
        case REMOVE_FAVORITE:
            const newState3 = merge({}, state);
            debugger
            delete newState3[action.id.user_id].favorites[action.id.restaurant_id];
            return newState3;
        case RECEIVE_RESERVATION:
            
            const nwInfo = {[action.reservation.restaurant_id]: action.reservation.id }
            const nwState = {[action.reservation.user_id]: {reservations: nwInfo }}
            return merge({}, state, nwState)
        case REMOVE_RESERVATION:
            
            const nState = merge({}, state);
            
            delete nState[action.id.user_id]["reservations"][action.id.restaurant_id]
            return nState;
        default:
            return state 
    }
}

export default usersReducer;