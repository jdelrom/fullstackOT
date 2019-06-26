import { RECEIVE_REVIEW, REMOVE_REVIEW, receiveReview } from '../actions/review_actions';
import {merge} from 'lodash';


const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_REVIEW:
            debugger
            return merge({}, state, {
                [action.review.id]: action.review
            })
        case REMOVE_REVIEW:
            const newState = merge({}, state);
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;