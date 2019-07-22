import * as RestaurantApiUtil from '../util/restaurant_utils'

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';


export const receiveRestaurants = (restaurants) => {
    
    return (
    {
        type: RECEIVE_RESTAURANTS,
        restaurants
    })
}

export const receiveRestaurant = ({restaurant, reservations, reviews, favorites}) => 
    {   
        return (
        {
            type: RECEIVE_RESTAURANT,
            restaurant,
            reservations,
            reviews,
            favorites
        })}

export const fetchRestaurants = () => (dispatch) => {
    return RestaurantApiUtil.fetchRestaurants().then(restaurants => {
        return dispatch(receiveRestaurants(restaurants))
    })
}

export const fetchRestaurant = (id) => (dispatch) => {
    return RestaurantApiUtil.fetchRestaurant(id).then(restaurant => {
        return dispatch(receiveRestaurant(restaurant))
    })
}

export const searchRestaurants = (search) => (dispatch) => {
    
    return RestaurantApiUtil.searchRestaurants(search).then(response => {
        
        return dispatch(receiveRestaurants(response));
    })
}