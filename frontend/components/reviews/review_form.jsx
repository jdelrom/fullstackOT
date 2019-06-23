import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview, deleteReview } from '../../actions/review_actions';

export const mSP = (state, ownProps) => {
    // debugger
    let usRes;
    if (state.session.id !== null) {
        usRes = state.entities.users[state.session.id].reservations
    } else {
        usRes = {}
    }
    return (
        {
            restaurant: state.entities.restaurants[ownProps.match.params.id],
            userReservations: usRes,
            userId: state.session.id
        }
    )
}

export const mDP = (dispatch) => ({
    createReview: (review) => dispatch(createReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id))
})

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user_id: this.props.userId
        }
    }

    render() {
        return (
            <div clasName='review-form-container'>
                <form className='review-form'>
                    <label htmlFor="rate-select">Rating:</label>
                    <select name="rate-select" className='rate-select'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(mSP, mDP)(ReviewForm));