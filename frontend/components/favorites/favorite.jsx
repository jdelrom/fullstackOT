import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

export const mSP = (state, ownProps) => {
    let userFavs;
    if (state.session.id !== null) {
        userFavs = state.entities.users[state.session.id].favorites
    } else {
        userFavs = {}
    }
    return (
        {
            restaurant: state.entities.restaurants[ownProps.match.params.id],
            loggedIn: Boolean(state.session.id),
            userFavorites: userFavs,
            currentUser: state.entities.users[state.session.id],
            restFavorites: state.entities.favorites
        }
    )
}

export const mDP = (dispatch) => ({
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id))
})


class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            restaurant_id: this.props.restaurant.id
        } 
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            user_id: this.props.userId,
            restaurant_id: this.props.restaurant.id
        })
        debugger
        this.props.createFavorite(this.state)
        this.setState({user_id: null, restaurant_id: null})
    }

    handleChange(e) {
        e.preventDefault();
      
    }

    render() {
        const { createFavorite, deleteFavorite, restaurant, loggedIn, userId, userFavorites, currentUser } = this.props;

        // debugger
        let selectFavorite;
        if (loggedIn) {
            // debugger
            if (restaurant && restaurant.favorites) {
                debugger
                if (currentUser.favorites && currentUser.favorites[restaurant.id]) {
                    debugger
                    selectFavorite = ( 
                        <div className='favorite-container'>
                            
                                <button onClick={() => deleteFavorite(userFavorites[restaurant.id]).then(this.setState({user_Id: null, restaurant_id: null}) )} className='favorite-selected'>Unfavorite</button>
                            
                        </div>
                    )
                } else {
                    debugger
                    selectFavorite = (
                        <div className='favorite-container'>
                            <form onSubmit={this.handleSubmit} className='favorite-form'>
                                <button className='favorite-unselected'>Favorite?</button>
                            </form>
                        </div>
                    )
                }
            }
        }
        debugger
        return (
            <>
                {selectFavorite}
            </>
        )
    }
}

export default withRouter(connect(mSP,mDP)(Favorites));