import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({restaurant}) => {
    let faStars;
    let restReviews;
    // let rand = restaurant.reviews.length
    if (restaurant.reviews) {
        restReviews = Object.values(restaurant.reviews);
        let amountStars = 0;
        for (let i = 0; i < restReviews.length; i++) {
            amountStars += restReviews[i].rating
        }
    
        amountStars = Math.floor(amountStars / restReviews.length)
        faStars = _.times(amountStars, () => {
            return (<i className="fa fa-star"></i>)
        })
    } else {
        return null;
    }
    

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
                        ({restReviews.length})
                    </li>
                    <li className="tag" >{restaurant.tag}</li>
                </ul>
        </div>
    )
}

export default RestaurantIndexItem;