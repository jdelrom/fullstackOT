export const fetchRestaurants = () => {
    return $.ajax({
        method: 'GET',
        url: "/api/restaurants",
    })
}

export const fetchRestaurant = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/restaurants/${id}`
    })
}

export const searchRestaurants = (search) => {
    
    return $.ajax({
        method: "GET",
        url: "/api/restaurants",
        data: search
    })
}

export const zomatoRestaurants = () => {

    return $.ajax({
        method: 'GET',
        url: 'https://developers.zomato.com/api/v2.1/locations?query=New%20York%20City&count=25'

    })
}
