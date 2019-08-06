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
        if (this.props.loggedIn) {
            this.state = {
                user_id: this.props.currentUser.id,
                restaurant_id: this.props.restaurant.id
            } 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.setState({
        //     user_id: this.props.userId,
        //     restaurant_id: this.props.restaurant.id
        // })
        this.props.createFavorite(this.state)
        // this.setState({user_id: null, restaurant_id: null})
    }

    handleChange(e) {
        e.preventDefault();
      
    }

    render() {
        const { createFavorite, deleteFavorite, restaurant, loggedIn, userId, userFavorites, currentUser } = this.props;

        let selectFavorite;
        if (loggedIn) {
            if (restaurant && restaurant.favorites) {
                
                if (currentUser.favorites && currentUser.favorites[restaurant.id]) {
                    
                    selectFavorite = ( 
                        <div className='favorite-container'>
                            <div className='unfav-div-holder'>
                                <button onClick={() => deleteFavorite(userFavorites[restaurant.id]).then(this.setState({ user_Id: currentUser.id, restaurant_id: restaurant.id }))} className='favorite-selected'>
                                    <i className="fas fa-thumbs-up">
                                        <p className='tool-tip-unfavorite'>Unfavorite?</p>
                                    </i>
                                </button>
                            </div>
                        </div>
                    )
                } else {
                    
                    selectFavorite = (
                        <div className='favorite-container'>
                            <div className='fav-div-holder'>
                                <form onSubmit={this.handleSubmit} className='favorite-form'>
                                    <button className='favorite-unselected'>
                                        <i className="far fa-thumbs-up">
                                            <p className='tool-tip-favorite'>Favorite?</p>
                                        </i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    )
                }
            }
        }
        
        return (
            <>
                {selectFavorite}
            </>
        )
    }
}

export default withRouter(connect(mSP,mDP)(Favorites));