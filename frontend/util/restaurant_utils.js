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
    });
};

export const searchRestaurants = (search) => {
    
    return $.ajax({
        method: "GET",
        url: "/api/restaurants",
        data: search
    });
};

export const zomatoRestaurants = () => {

    return $.ajax({
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=20&count=40',
        dataType: 'JSON',
        headers: {
            "user-key": "82c5ddec753d58490249ad45629c7669"
        }
    });
};

//DYNAMICALLY CHANGE THE START AND COUNT NUMBERS????

// export const zomatoRestaurants = () => {
//     let url = "https://developers.zomato.com/api/v2.1/locations?query=New%20York&count=25";
//     url += '?' + $.param({
//         'user-key': "82c5ddec753d58490249ad45629c7669"
//     });
//     $.ajax({
//         url: url,
//         method: 'GET',
//         dataType: 'JSON',
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (err) {
//             console.log('error:' + err)
//         }
//     })
// }