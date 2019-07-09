import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import {RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/reservation_actions';
import {RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { merge, remove } from 'lodash';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            debugger
            return action.restaurant;
        // case RECEIVE_RESERVATION:
        //     // debugger
        //     const newState = merge({}, state);
        //     // debugger
        //     newState[action.reservation.restaurant_id].reservations = [action.reservation.restaurant_id]
        //     // debugger
        //     return merge({}, state, newState)
        case RECEIVE_REVIEW:
            const nState = merge({}, state);
            debugger
            nState[action.review.restaurant_id]['reviews'].push(action.review)
            // nState[action.review.restaurant_id]['reviews'].push(action.review)
            // debugger
            return merge({}, state, nState)
        // case REMOVE_RESERVATION:
        //     const nwState = merge({}, state);
            // debugger
        case REMOVE_REVIEW:
            const nwState = merge({}, state);
            debugger
            let filter = nwState[action.id.restaurant_id]['reviews'].filter(obj => {
                if (obj.id !== action.id.id) return obj;
            })
            debugger
            // delete nwState['reviews'][action.id.id]
            nwState[action.id.restaurant_id]['reviews'] = filter
            return nwState
        default:
            return state
    }
}

export default restaurantsReducer;