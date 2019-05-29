import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { login, logout, signUp } from './actions/session_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    //TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signUp = signUp;
    //TESTING END
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});

