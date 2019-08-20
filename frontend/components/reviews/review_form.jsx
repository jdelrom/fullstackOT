import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { deleteReview, updateReview } from '../../actions/review_actions';

export const mSP = (state, ownProps) => {
    
    return (
        {
            restaurant: state.entities.restaurants[ownProps.location.pathname.slice(13)],
            loggedIn: Boolean(state.session.id),
            userId: state.session.id,
            review: ownProps.review
        }
    )
}

export const mDP = (dispatch) => ({
    deleteReview: (id) => dispatch(deleteReview(id)),
    updateReview: (review) => dispatch(updateReview(review)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
                if (this.props.review.user_id === this.props.userId) {
                    
                    this.state = {
                        id: this.props.review.id,
                        user_id: this.props.userId,
                        rating: this.props.review.rating,
                        review: this.props.review.review,
                        restaurant_id: this.props.restaurant.id
                    }
                // } else {
                //     this.state = {
                //         user_id: this.props.userId,
                //         rating: null,
                //         review: '',
                //         restaurant_id: this.props.restaurant.id
                //     }
                }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }



    handleSubmit(e) {
        e.preventDefault();
        
        this.props.createReview(this.state)
        this.setState({
            review: '',
            rating: null,
        })
    }

    handleEdit(e) {
        e.preventDefault();

        this.props.updateReview(this.state);``
        this.props.closeModal();
    }
    

    handleRadio(key) {
        
        return (e) => {
                this.setState({ [key]: e.target.innerText })
        }
    }

    handleReview(key) {

        return (e) => {

            this.setState({ [key]: e.target.value })

        }
    }

    render() {
        const {loggedIn, review, userId } = this.props;
        
        function uncheck() {
            document.getElementById("star-1").checked = false;
            document.getElementById("star-2").checked = false;
            document.getElementById("star-3").checked = false;
            document.getElementById("star-4").checked = false;
            document.getElementById("star-5").checked = false;
        }

        let revForm;
        
        if (loggedIn) {
                
            if (review.user_id === userId) {
                
                revForm = (
                    <div className='review-form-container'>
                        <form onSubmit={this.handleEdit} className='review-form'>
                            
                                <div onClick={this.handleRadio('rating')} className="stars">
                                    <input onClick={e => e.stopPropagation()} defaultChecked={this.state.rating > 0} type="radio" name="star" className="star-1" id="star-1" value='1' />
                                    <label value='1' className="star-1" htmlFor="star-1" >1</label> <p className='tool-tip-text1'>Gross</p>
                                    <input onClick={e => e.stopPropagation()} defaultChecked={this.state.rating > 1} type="radio" name="star" className="star-2" id="star-2" value='2' />
                                    <label value='2' className="star-2" htmlFor="star-2" >2</label> <p className='tool-tip-text2'>Needs Improvement</p>
                                    <input onClick={e => e.stopPropagation()} defaultChecked={this.state.rating > 2} type="radio" name="star" className="star-3" value='3' id="star-3" />
                                    <label className="star-3" htmlFor="star-3" value='3'>3</label> <p className='tool-tip-text3'>It was OK</p>
                                    <input onClick={e => e.stopPropagation()} defaultChecked={this.state.rating > 3} type="radio" name="star" className="star-4" value='4' id="star-4" />
                                    <label className="star-4" htmlFor="star-4" value='4'>4</label> <p className='tool-tip-text4'>Pretty Good</p>
                                    <input onClick={e => e.stopPropagation()} defaultChecked={this.state.rating > 4} type="radio" name="star" className="star-5" value='5' id="star-5" />
                                    <label value='5' className="star-5" htmlFor="star-5"  >5</label> <p className='tool-tip-text5'>Great!</p>
                                    {/* <input onClick={e => e.stopPropagation()} defaultChecked={this.state.rating === review.rating} type="radio" name="star" className="star-5" value='5' id="star-5" />
                                    <label value='5' className="star-5" htmlFor="star-5"  >5</label> <p className='tool-tip-text5'>Great!</p> */}
                                    <span></span>
                                </div>
                            <textarea onChange={this.handleReview('review')} name='review-form-input' className='review-form-input' value={this.state.review} type="text" > </textarea>
                            <button className='review-form-button'> Edit Review </button>
                        </form>
                            <button className='review-form-button' onClick={() => this.props.deleteReview(review.id).then(this.props.closeModal())}> Delete Review</button>
                    </div>
                )
                
            } else {
                revForm = (
                    <div className='review-form-else'></div>
                )
                }
                
        } else {
            revForm = (
                <div className='review-form-else'></div>
            )
            
        }
            
            return (
            <>
                {revForm}
            </>
        )
    }
}

export default withRouter(connect(mSP, mDP)(ReviewForm));