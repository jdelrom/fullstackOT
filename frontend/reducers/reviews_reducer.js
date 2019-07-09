import { RECEIVE_REVIEW, REMOVE_REVIEW, receiveReview } from '../actions/review_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions'
import {merge} from 'lodash';


const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_RESTAURANT:
            debugger
            return action.reviews
        case RECEIVE_REVIEW:
            debugger
            return merge({}, state, {
                [action.review.id]: action.review
            })
        case REMOVE_REVIEW:
            const newState = merge({}, state);
            debugger
            delete newState[action.id.id]
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;