import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import restaurantsReducer from './restaurants_reducer';
import reservationsReducer from './reservation_reducer';
import reviewReducer from './reviews_reducer';
import favoriteReducer from './favorites_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reservations: reservationsReducer,
    reviews: reviewReducer,
    favorites: favoriteReducer,
});

export default entitiesReducer;