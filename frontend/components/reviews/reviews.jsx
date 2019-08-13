import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { times } from 'lodash';

// export const mSP = (state, ownProps) => {
//    
//     return (
//         {
//             restaurant: state.entities.restaurants[ownProps.match.params.id],
//             loggedIn: Boolean(state.session.id),
//             userId: state.session.id,
//             restReviews: Object.values(state.entities.restaurants[ownProps.match.params.id].reviews),
//         }
//     )
    
// }

// export const mDP = (dispatch) => ({
//     createReview: (review) => dispatch(createReview(review)),
//     deleteReview: (id) => dispatch(deleteReview(id)),
//     updateReview: (review) => dispatch(updateReview(review)),
//     openModal: (modal) => dispatch(openModal(modal))
// })

class Reviews extends React.Component {
    constructor(props) {
        super(props)
        
    }


    render() {
        const { review, currentUser } = this.props;
        let faStars = _.times(review.rating, () => {
            return (<i className="fa fa-star"></i>)
        })
        
        let editForm;
        if (review.user_id === currentUser) {
            
            editForm = (
                <button className='edit-button' onClick={() => this.props.openModal('editReview', this.props.review)}>Edit Review</button>
            )
        }

        // for (let i = 0; i < restReviews.length; i++) {

            // if (review.user_id === userId) {
            //     editForm = (
            //         <button className='edit-button' onClick={() => this.props.openModal('edit-review')}>Edit Review</button>
            //     )
            // }
        // }


        
        
        return (
            <div className="review-parent">   
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
                                </p>
                                <div> {editForm} </div>
                            </div>   

                            <p>{review.review}</p>
                           
                        </div>
                        {/* <div className='edit-review-form-button'> */}
                               
                            
                        {/* </div> */}
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default (Reviews);
// withRouter(connect(mSP, mDP)