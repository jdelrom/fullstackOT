import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import {RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/reservation_actions';
import {RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions'
import { merge, remove } from 'lodash';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            const newState2 = merge({}, state, action.restaurant)
            return newState2;
        // case RECEIVE_RESERVATION:
       
        //     const newState = merge({}, state);
       
        //     newState[action.reservation.restaurant_id].reservations = [action.reservation.restaurant_id]
       
        //     return merge({}, state, newState)
        case RECEIVE_REVIEW:
            const nState = merge({}, state);
            
            nState[action.review.restaurant_id].reviews[action.review.id] = action.review
            // nState[action.review.restaurant_id]['reviews'].push(action.review)
            
            return merge({}, state, nState)
        // case REMOVE_RESERVATION:
        //     const nwState = merge({}, state);
            
        case REMOVE_REVIEW:
            const nwState = merge({}, state);
            
            delete nwState[action.id.restaurant_id].reviews[action.id.id]
            // let filter = Object.values(nwState[action.id.restaurant_id].reviews).filter(obj => {
            //     if (obj.id !== action.id.id) return obj;
            // })

            // delete nwState['reviews'][action.id.id]
            // nwState[action.id.restaurant_id].reviews = filter
            return nwState

        case RECEIVE_FAVORITE:
            const nuevoState = merge({}, state);
            
            nuevoState[action.favorite.restaurant_id]['favorites'].push(action.favorite)
            return merge({}, state, nuevoState);

        case REMOVE_FAVORITE:
            const nuevState = merge({}, state);

            let nfilter = nuevState[action.id.restaurant_id]['favorites'].filter(obj => {
                if (obj.id !== action.id.id) return obj;
            })
            
            nuevState[action.id.restaurant_id]['favorites'] = nfilter
            return nuevState

        default:
            return state
    }
}

export default restaurantsReducer;