import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchRestaurants} from '../../actions/restaurant_actions';

export const mSP = (state, ownProps) => {
    
    return (
        {
            restaurants: state.entities.restaurants
        }
    )
}

export const mDP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

    class GreetBackground extends React.Component {
        
        constructor(props) {
            super(props)
        }

        render() {

        
            return (
                <div className='slider-parent'>
                    <div className='slider'>
                        <div className='load'>
                        </div> 
                    <div class='content'>
                        <div className='principal'>
                            <div><img src={window.splashURL} /> </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    </div>
                </div>
            )

        }

    }

export default withRouter(connect(mSP, mDP)(GreetBackground));