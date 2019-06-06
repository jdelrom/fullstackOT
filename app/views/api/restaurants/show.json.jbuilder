
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