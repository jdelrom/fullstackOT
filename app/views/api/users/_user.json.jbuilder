json.extract! user, :id, :email, :fname, :lname
# debugger

# if user.reservations
json.reservations do
        user.reservations.each do |reservation|
            # debugger
            json.set! reservation.restaurant_id, reservation.id
        end
    end
# end
# json.restaurants user.reservations.pluck(:restaurant_id)