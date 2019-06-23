import * as ReviewApiUtil from "../util/review_utils";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = (id) => ({
    type: REMOVE_REVIEW,
    id
})

export const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const createReview = (review) => (dispatch) => {
    return ReviewApiUtil.createReview(review).then(response => {
        return dispatch(receiveReview(response))
    }, response => dispatch(receiveReviewErrors(response)));
};

export const fetchReview = (id) => (dispatch) => {
    return ReviewApiUtil.fetchReview(id).then(response => {
        return dispatch(receiveReview(response))
    }, response => dispatch(receiveReviewErrors(response)))
};

export const deleteReview = (id) => (dispatch) => {
    return ReviewApiUtil.deleteReview(id).then(response => {
        return dispatch(removeReview(response))
    });
};