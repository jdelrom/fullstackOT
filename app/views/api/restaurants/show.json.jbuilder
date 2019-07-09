
json.restaurant do
    json.set! @restaurant.id do
        json.partial! 'restaurant', restaurant: @restaurant  
    end
end
json.reservations do
    @restaurant.reservations.each do |reservation|
        json.set! reservation.id do
            json.partial! 'api/reservations/reservation', reservation: reservation 
        end
    end
end
json.reviews do
#   json.review_ids @restaurant.reviews.map(&:id)
    @restaurant.rates_reviews.each do |review|
        json.set! review.id do
            json.partial! 'api/rates_reviews/rates_review', rates_review: review
        end
    end
end

