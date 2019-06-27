import React from 'react';
import ReviewForm from './review_form';
import { times } from 'lodash';


class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { review } = this.props;
        let faStars = _.times(review.rating, () => {
            return (<i className="fa fa-star"></i>)
        })
        
        debugger
        return (
            <div className="review-parent">
              
                {/* <div className="review-restaurant">

                </div> */}
                <div className="review-others">
                    <div className="review-user">
                        <div className='review-username'>
                            <p>{review.author}</p>
                        </div>
                        <div className='review-body'>
                            <div className='review-div1'> 
                                <p className='review-p'>Overall: {review.rating}</p>
                                <p>
                                    {faStars}
                                    {/* <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i> */}
                                </p>

                            </div>   

                            <p>{review.review}</p>
                        </div>
                    </div>
                    {/* <div className="review-user">
                        <div className='reivew-username'>
                            <p>Tiffany Lynn</p>
                        </div>
                        <div className='review-body'>
                            <h2>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </h2>
                                <h3>Overall 4 - Food 4 - Service 4 - Ambience 4</h3>

                            
                            <p>WOW!</p>
                        </div>
                    </div>
                    <div className="review-user">
                        <div className='reivew-username'>
                            <p>Sara May</p>
                        </div>
                        <div className='review-body'>
                            <h2>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </h2>
                                <h3>Overall 4 - Food 4 - Service 4 - Ambience 4</h3>

                            
                            <p>OMG!</p>
                        </div>
                    </div>
                    <div className="review-user">
                        <div className='reivew-username'>
                            <p>David Al</p>
                        </div>
                        <div className='review-body'>
                            <h2>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </h2>
                                <h3>Overall 4 - Food 4 - Service 4 - Ambience 4</h3>

                            
                            <p>Cool Story!</p>
                        </div>
                    </div>
                    <div className="review-user">
                        <div className='reivew-username'>
                            <p>Ali Mannu</p>
                        </div>
                        <div className='review-body'>
                            <h2>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </h2>
                                <h3>Overall 4 - Food 4 - Service 4 - Ambience 4</h3>

                            
                            <p>YAHHHSS!</p>
                        </div>
                    </div>
                    <div className="review-user">
                        <div className='reivew-username'>
                            <p>Sennacy Opal</p>
                        </div>
                        <div className='review-body'>
                            <h2>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </h2>
                                <h3>Overall 4 - Food 4 - Service 4 - Ambience 4</h3>

                            
                            <p>PuRrRrRr!</p>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Reviews;