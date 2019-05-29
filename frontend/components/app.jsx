import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './signup/signup_form_container';
import SessionFormContainer from './session/session_form_container';

const App = () => {
    return (
    <div>
        <header>
            <h1>openMesa</h1>
            <h2>MUAHAHAHAHHAHA</h2>
            <GreetingContainer />
        </header>

            <Route path='/signup' component={SignupFormContainer} />
            <Route path='/login' component={SessionFormContainer} />
    </div>
    )
};

export default App