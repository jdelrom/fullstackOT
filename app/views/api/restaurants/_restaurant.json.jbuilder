json.extract! restaurant, :id, :name, :aboutme, :address, :city, :zipcode, 
:phone, :capacity, :tag, :state
json.reservations restaurant.reservations
json.users restaurant.users
json.reviews do
    restaurant.rates_reviews.each do |review|
        json.set! review.id do
            json.partial! 'api/rates_reviews/rates_review', rates_review: review
        end
    end
end
json.favorites restaurant.favorites
json.photoUrl restaurant.photos.map { |photo| url_for(photo) }