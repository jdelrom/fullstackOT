import {RECEIVE_RESERVATION, REMOVE_RESERVATION} from '../actions/reservation_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import {merge} from 'lodash'


const reservationReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_RESERVATION:
            // debugger
            return merge({}, state, {[action.reservation.id]: action.reservation} )
        case REMOVE_RESERVATION:
            // debugger
            const newState = merge({}, state);
            delete newState[action.id]
            return newState;
        // case RECEIVE_RESTAURANT:
        //     debugger
        //     return action.data.reservations;
        default:
            return state;
    }
}

export default reservationReducer;