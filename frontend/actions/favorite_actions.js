import * as FavoriteApiUtil from '../util/favorite_utils';

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_FAVORITE_ERRORS = 'RECEIVE_FAVORITE_ERRORS';

export const receiveFavorite = (favorite) => ({
    type: RECEIVE_FAVORITE,
    favorite
})

export const removeFavorite = (id) => ({
    type: REMOVE_FAVORITE,
    id
})

export const receiveFavoriteErrors = (errors) => ({
    type: RECEIVE_FAVORITE_ERRORS,
    errors
})

export const createFavorite = (favorite) => (dispatch) => {
    return FavoriteApiUtil.createFavorite(favorite).then(response => {
        return dispatch(receiveFavorite(response))
    }, response => dispatch(receiveFavoriteErrors(response)))
};

export const fetchFavorite = (id) => (dispatch) => {
    return FavoriteApiUtil.fetchFavorite(id).then(response => {
        return dispatch(receiveFavorite(response))
    }, response => dispatch(receiveFavoriteErrors(response)))
};

export const deleteFavorite = (id) => (dispatch) => {
    return FavoriteApiUtil.deleteFavorite(id).then(response => {
        return dispatch(removeFavorite(response))
    })
};