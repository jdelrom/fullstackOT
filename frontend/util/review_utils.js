export const createReview = (review) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: '/api/rates_reviews',
        data: { review }
    });
};

export const fetchReview = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/rates_reviews/${id}`
    })
}

export const updateReview = (review) => {
    debugger
    return $.ajax({
        method: "PATCH",
        url: `/api/rates_reviews/${review.id}`,
        data: {review}
    });
};

export const deleteReview = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/rates_reviews/${id}`
    });
};