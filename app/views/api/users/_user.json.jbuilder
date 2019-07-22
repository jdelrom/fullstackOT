json.extract! user, :id, :email, :fname, :lname


# if user.reservations
json.reservations do
        user.reservations.each do |reservation|
            
            json.set! reservation.restaurant_id, reservation.id
        end
    end

json.reviews do
        user.rates_reviews.each do |review|
            
            json.set! review.id, review
        end
    end

json.favorites do 
    user.favorites.each do |favorite|
        json.set! favorite.restaurant_id, favorite.id
    end
end
# end
# json.restaurants user.reservations.pluck(:restaurant_id)