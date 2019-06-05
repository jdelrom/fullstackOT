json.extract! restaurant, :id, :name, :aboutme, :address, :city, :zipcode, 
:phone, :capacity, :tag, :state
json.photoUrl restaurant.photos.map { |file| url_for(file) }