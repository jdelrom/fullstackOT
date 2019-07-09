import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview, deleteReview, updateReview } from '../../actions/review_actions';

export const mSP = (state, ownProps) => {
    // debugger
    return (
        {
            restaurant: state.entities.restaurants[ownProps.match.params.id],
            loggedIn: Boolean(state.session.id),
            userId: state.session.id,
            restReviews: state.entities.restaurants[ownProps.match.params.id]['reviews'],
        }
    )
}

export const mDP = (dispatch) => ({
    createReview: (review) => dispatch(createReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id)),
    updateReview: (review) => dispatch(updateReview(review))
})

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        let defReview;
        // debugger
        for (let i = 0; i < this.props.restReviews.length; i++) {
            if (this.props.restReviews[i].user_id === this.props.userId) {
                this.state = {
                    id: this.props.restReviews[i].id,
                    user_id: this.props.userId,
                    rating: null,
                    review: this.props.restReviews[i].review,
                    restaurant_id: this.props.restaurant.id
                }
            } else {
                this.state = {
                    user_id: this.props.userId,
                    rating: null,
                    review: '',
                    restaurant_id: this.props.restaurant.id
                }
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }



    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.createReview(this.state)
        this.setState({
            review: '',
            rating: null,
        })
    }

    handleEdit(e) {
        e.preventDefault();
        // debugger
        this.props.updateReview(this.state)
        this.setState({
            review: '',
            rating: null,
        })
    }
    

    handleRadio(key) {
        // debugger
        return (e) => {
            this.setState({ [key]: e.target.innerText })
            debugger
        }
    }
    
    handleChange(key) {
        debugger
        return (e) => {
            this.setState({ [key]: e.target.value })
            debugger
        }
    }

    render() {
        const {loggedIn, restReviews, userId } = this.props;
        function uncheck() {
            document.getElementById("star-1").checked = false;
            document.getElementById("star-2").checked = false;
            document.getElementById("star-3").checked = false;
            document.getElementById("star-4").checked = false;
            document.getElementById("star-5").checked = false;
        }

        let revForm;
        if (loggedIn) {
            // debugger
            for (let i = 0; i < restReviews.length; i++) {
                // debugger
                if (restReviews[i].user_id === userId) {
                    revForm = (
                        <div className='review-form-container'>
                            <form onSubmit={this.handleEdit} className='review-form'>
                                <div onClick={this.handleChange('rating')} className="stars">
                                    <input checked={this.state.rating === i} type="radio" name="star" className="star-1" id="star-1" value='1' />
                                    <label value='1' className="star-1" htmlFor="star-1" >1</label><p className='tool-tip-text1'>Gross</p>
                                    <input checked={this.state.rating === i} type="radio" name="star" className="star-2" id="star-2" value='2' />
                                    <label value='2' className="star-2" htmlFor="star-2" >2</label><p className='tool-tip-text2'>Needs Improvement</p>
                                    <input checked={this.state.rating === i} type="radio" name="star" className="star-3" value='3' id="star-3" />
                                    <label className="star-3" htmlFor="star-3" value='3'>3</label><p className='tool-tip-text3'>It was OK</p>
                                    <input checked={this.state.rating === i} type="radio" name="star" className="star-4" value='4' id="star-4" />
                                    <label className="star-4" htmlFor="star-4" value='4'>4</label><p className='tool-tip-text4'>Pretty Good</p>
                                    <input checked={this.state.rating === i} type="radio" name="star" className="star-5" value='5' id="star-5" />
                                    <label value='5' className="star-5" htmlFor="star-5"  >5<p className='tool-tip-text5'>Great!</p></label>
                                    <span></span>
                                </div>
                                <textarea onChange={this.handleChange('review')} name='review-form-input' className='review-form-input' value={this.state.review} type="text" > </textarea>
                                <button className='review-form-button'> Edit Review </button>
                            </form>
                                <button className='review-form-button' onClick={() => this.props.deleteReview(restReviews[i].id).then(this.setState({review: '', rating: null}))}> Delete Review</button>
                        </div>
                    )
                    
                } else {
                    revForm = (
                        <div className='review-form-container'>
                            <form onSubmit={this.handleSubmit} className='review-form'>
                                <div onClick={this.handleChange('rating')} className="stars">
                                    <input type="radio" name="star" className="star-1" id="star-1" value='1' />
                                    <label value='1' className="star-1" htmlFor="star-1" >1</label><p className='tool-tip-text1'>Gross</p>
                                    <input type="radio" name="star" className="star-2" id="star-2" value='2'/>
                                    <label value='2' className="star-2" htmlFor="star-2" >2</label><p className='tool-tip-text2'>Needs Improvement</p>
                                    <input type="radio" name="star" className="star-3" value='3'id="star-3" />
                                    <label className="star-3" htmlFor="star-3" value='3'>3</label><p className='tool-tip-text3'>It was OK</p>
                                    <input type="radio" name="star" className="star-4" value='4' id="star-4" />
                                    <label className="star-4" htmlFor="star-4" value='4'>4</label><p className='tool-tip-text4'>Pretty Good</p>
                                    <input type="radio" name="star" className="star-5" value='5'id="star-5" />
                                    <label value='5' className="star-5" htmlFor="star-5"  >5</label><p className='tool-tip-text5'>Great!</p>
                                    <span></span>
                                </div>
                                <textarea placeholder='What did you think?' onChange={this.handleChange('review')} name='review-form-input' className='review-form-input' value={this.state.review}>
                                </textarea>  
                                <button className='review-form-button'> Submit Review </button>
                            </form>
                        </div>
                    )
                    
                  }
                }
        } else {
            revForm = (
                <div className='review-form-else'></div>
            )
            
        }
        // debugger
            let rating = [];
             for (let i = 1; i < 6; i++) {
                if (this.state.rating >= i) {
                    rating.push(
                        <label key={i}>
                            <input type="radio" className="radio-rating" name="rating" value={i} checked={this.state.rating === i} onChange={this.handleChange("rating")} />
                            <i className="fas fa-star"></i>
                        </label>
                    )
                } else {
                    rating.push(
                        <label key={i}>
                            <input type="radio" className="radio-rating" name="rating" value={i} checked={this.state.rating === i} onChange={this.handleChange("rating")} />
                            <i className="far fa-star"></i>
                        </label>
                    )
                }
            }
            
            return (
            <>
            {revForm}
            </>
        )
    }
}

export default withRouter(connect(mSP, mDP)(ReviewForm));