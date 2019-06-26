json.extract! restaurant, :id, :name, :aboutme, :address, :city, :zipcode, 
:phone, :capacity, :tag, :state
json.reservations restaurant.reservations
json.users restaurant.users
json.reviews restaurant.rates_reviews
json.photoUrl restaurant.photos.map { |photo| url_for(photo) }