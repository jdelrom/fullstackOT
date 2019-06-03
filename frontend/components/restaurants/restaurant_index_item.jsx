import React from 'react';

const RestaurantIndexItem = ({restaurant}) => {
    // debugger
    return (
       
        <ul className='rest-index-items'>  <a href="/" className='rest-index-names'>{restaurant.name}</a>
            <li>
                <i class="fa fa-star" aria-hidden="true"></i> 
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                (202)
            </li>
            <li className="tag" >{restaurant.tag}</li>
           <ul className="time-slots">
                <li>6:00 PM</li>
                <li>6:15 PM</li>
                <li>6:30 PM</li>
                <li>6:45 PM</li>
                <li>7:00 PM</li>
           </ul>
        </ul>
    )
}

export default RestaurantIndexItem;