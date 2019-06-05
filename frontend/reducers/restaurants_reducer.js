import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import {RECEIVE_RESERVATION } from '../actions/reservation_actions';
import { merge } from 'lodash';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            return action.restaurant;
        case RECEIVE_RESERVATION:
            // debugger
            const newState = merge({}, state);
            // debugger
            newState[action.reservation.restaurant_id].reservations = [action.reservation.restaurant_id]
            // debugger
            return merge({}, state, newState)
        default:
            return state
    }
}

export default restaurantsReducer;