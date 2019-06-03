import React from 'react';

const RestaurantIndexItem = ({restaurant}) => {
    // debugger
    return (
        <ul>
            <li>
                <i class="fa fa-star" aria-hidden="true"></i> 
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                (202)
            </li>
           <li>6:30 PM</li>
           <li>6:45 PM</li>
           <li>7:00 PM</li>
           <li>7:15 PM</li>
           <li></li>
        </ul>
    )
}

export default RestaurantIndexItem;