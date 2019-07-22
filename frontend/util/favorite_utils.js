export const createFavorite = ( favorite ) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: '/api/favorites/',
        data: { favorite }
    })
}

export const fetchFavorite = (id) => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: `/api/favorites/${id}`
    })
}

export const deleteFavorite = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/favorites/${id}`
    })
}