import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './signup/signup_form_container';
import SessionFormContainer from './session/session_form_container';


const App = () => {
    return (
        <>
    <div className='modal-parent'> <Modal /> </div>
        <div className="root">
           
             <header className="top-header">
                 <ul className="logo-links">  
                    <li>
                        <a href="/">
                            <div className='logo'></div>
                        </a>
                    </li> 
                    <li>
                       <a href="">
                           <h1 className="title">OpenMesa</h1>
                       </a> 
                    </li>
                        
                </ul> 
             </header>
                    <GreetingContainer />
             <div className="root-header">
                <h1 className="background-header">Find your mesa for any occasion</h1>
             </div>
            <img src={window.splashURL} />
                {/* <img src={window.splashURL} /> */}
            {/* <AuthRoute path='/signup' component={SignupFormContainer} />
            <AuthRoute path='/login' component={SessionFormContainer} /> */}
     </div>
     </>
    )
};

export default App