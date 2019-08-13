import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({restaurant}) => {
    
    // let rand = restaurant.reviews.length
    if (restaurant.reviews) {
        const restReviews = Object.values(restaurant.reviews);
    } else {
        return null;
    }
    debugger
    let amountStars = 0;
    
    for (let i = 0; i < restReviews.length; i++) {
        amountStars += restReviews[i].rating
    }

    amountStars = Math.floor(amountStars / restReviews.length)
    let faStars = _.times(amountStars, () => {
        return (<i className="fa fa-star"></i>)
    })
    
    return (
        <div className="rest-index-items-container">
            
            <div className='rest-index-img-div'>
                <Link to={`/restaurants/${restaurant.id}`}> 
                    <img className="rest-index-img" src={restaurant.photoUrl[Math.floor((Math.random() * restaurant.photoUrl.length))]}/>
                </Link>
            </div>
            
                <ul className='rest-index-items'><Link to={`/restaurants/${restaurant.id}`} className='rest-index-names'>{restaurant.name}</Link>
                    <li>
                        {faStars}
                        {/* <i class="fa fa-star" aria-hidden="true"></i> 
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i> */}
                        ({restReviews.length})
                    </li>
                    <li className="tag" >{restaurant.tag}</li>
                {/* <ul className="time-slots">
                        <li>6:00 PM</li>
                        <li>6:15 PM</li>
                        <li>6:30 PM</li>
                        <li>6:45 PM</li>
                        <li>7:00 PM</li>
                </ul> */}
                </ul>
        </div>
    )
}

export default RestaurantIndexItem;