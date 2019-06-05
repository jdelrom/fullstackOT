import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mSP = (state, ownProps) => ({
    restaurants: Object.values(state.entities.restaurans)
})

const mDP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

class restCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'more'
        }
    }

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.mode === 'less') {
            this.setState( { mode: 'more' } )
        } else {
            this.setState( { mode: 'less' } ) 
        }
    }

    render() {
        
    }
}