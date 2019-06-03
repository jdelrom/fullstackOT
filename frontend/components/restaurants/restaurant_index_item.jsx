import React from 'react';

const RestaurantIndexItem = ({restaurant}) => {
    // debugger
    return (
        <ul>
            <li> {restaurant.aboutme}</li>
            <li> {restaurant.phone}</li> 
        </ul>
    )
}

export default RestaurantIndexItem;