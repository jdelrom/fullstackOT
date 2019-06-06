json.extract! restaurant, :id, :name, :aboutme, :address, :city, :zipcode, 
:phone, :capacity, :tag, :state
json.reservations restaurant.reservations.pluck(:id)
json.users restaurant.users.pluck(:id)
json.photoUrl restaurant.photos.map { |photo| url_for(photo) }