import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({restaurant}) => {
    // debugger
    let rand = Math.floor(Math.random() * 1000)
    return (
        <div className="rest-index-items-container">

            <div>
                <Link to={`/restaurants/${restaurant.id}`}> 
                    <img className="rest-index-img" src={restaurant.photoUrl}/>
                </Link>
            </div>
            <ul className='rest-index-items'><Link to={`/restaurants/${restaurant.id}`} className='rest-index-names'>{restaurant.name}</Link>
                <li>
                    <i class="fa fa-star" aria-hidden="true"></i> 
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
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
            </ul>
        </div>
    )
}

export default RestaurantIndexItem;