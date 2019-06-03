import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import RestaurantContainer from './restaurants/restaurant_container';


const App = () => {
    return (
        <>
    <div className='modal-parent'> <Modal /> </div>
        <div className="root">
             <header className="top-header">
                
             </header>
                <Route path='/restaurants' component={RestaurantContainer} />
                <Route exact path="/" component={GreetingContainer} />
             
            
                {/* <img src={window.splashURL} /> */}
            {/* <AuthRoute path='/signup' component={SignupFormContainer} />
            <AuthRoute path='/login' component={SessionFormContainer} /> */}
     </div>
     </>
    )
};

export default App