json.extract! user, :id, :email, :fname, :lname
json.reservations user.reservations.pluck(:id)