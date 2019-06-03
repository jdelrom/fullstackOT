import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({restaurant}) => {
    // debugger
    let rand = Math.floor(Math.random() * 1000)
    return (
<<<<<<< HEAD
        <ul>
=======
       
        <ul className='rest-index-items'><Link to={`/restaurants/${restaurant.id}`} className='rest-index-names'>{restaurant.name}</Link>
>>>>>>> restaurantBranch
            <li>
                <i class="fa fa-star" aria-hidden="true"></i> 
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
<<<<<<< HEAD
                (202)
            </li>
           <li>6:30 PM</li>
           <li>6:45 PM</li>
           <li>7:00 PM</li>
           <li>7:15 PM</li>
           <li></li>
=======
                ({rand})
            </li>
            <li className="tag" >{restaurant.tag}</li>
           <ul className="time-slots">
                <li>6:00 PM</li>
                <li>6:15 PM</li>
                <li>6:30 PM</li>
                <li>6:45 PM</li>
                <li>7:00 PM</li>
           </ul>
>>>>>>> restaurantBranch
        </ul>
    )
}

export default RestaurantIndexItem;