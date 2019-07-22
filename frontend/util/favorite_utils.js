export const createFavorite = ( favorite ) => {
   
    return $.ajax({
        method: 'POST',
        url: '/api/favorites/',
        data: { favorite }
    })
}

export const fetchFavorite = (id) => {
    
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