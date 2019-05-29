import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './signup/signup_form_container';
import SessionFormContainer from './session/session_form_container';


const App = () => {
    return (
    <div>
        <Modal />
        <header>
           <h1>openMesa</h1>
            <GreetingContainer />
        </header>

            {/* <AuthRoute path='/signup' component={SignupFormContainer} />
            <AuthRoute path='/login' component={SessionFormContainer} /> */}
    </div>
    )
};

export default App