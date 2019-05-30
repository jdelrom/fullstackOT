import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './signup/signup_form_container';
import SessionFormContainer from './session/session_form_container';


const App = () => {
    return (
        <div className="root">
        
        <div className='modal-parent'> <Modal /> </div>
        <header className="top-header">
           <div className='logo'></div><h1 className="title">openMesa</h1>
            <GreetingContainer />
        </header>
            <h1 className="background-header">Find your mesa for any occasion</h1>
            <img src={window.splashURL} />
                {/* <img src={window.splashURL} /> */}
            {/* <AuthRoute path='/signup' component={SignupFormContainer} />
            <AuthRoute path='/login' component={SessionFormContainer} /> */}
    </div>
    )
};

export default App