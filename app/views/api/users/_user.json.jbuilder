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

json.favorites user.favorites
# end
# json.restaurants user.reservations.pluck(:restaurant_id)