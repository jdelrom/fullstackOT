import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {createReservation} from './actions/reservation_actions';

// import { login, logout, signUp } from './actions/session_actions';
// import { fetchRestaurants, fetchRestaurant } from './actions/restaurant_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // const store = configureStore();
    //TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createReservation = createReservation
    // window.fetchRestaurant = fetchRestaurant;
    // window.fetchRestaurants = fetchRestaurants;
    // window.login = login;
    // window.logout = logout;
    // window.signUp = signUp;
    //TESTING END
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});

