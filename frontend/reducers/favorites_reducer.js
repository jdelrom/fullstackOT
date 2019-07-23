import { RECEIVE_FAVORITE, REMOVE_FAVORITE, receiveFavorite } from '../actions/favorite_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions'
import { merge } from 'lodash';


const favoriteReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return action.favorites
        case RECEIVE_FAVORITE:
            
            return merge({}, state, {
                [action.favorite.id]: action.favorite
            })
        case REMOVE_FAVORITE:
            const newState = merge({}, state);
            
            delete newState[action.id.id]
            return newState;
        default:
            return state;
    }
}

export default favoriteReducer;