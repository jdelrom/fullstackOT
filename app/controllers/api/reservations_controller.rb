class Api::ReservationsController < ApplicationController

    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save!
            #push reservation id onto user and restaurant
            #set up an array with user and restaurant to take in 
            #reservation ids? 
        end
    end

    def update
        
    end

    def destroy

    end

    private

    def reservation_params
        params.require(:reservation).permit(
            :party_size,
            :reservation_time,
            :reservation_date
        )
    end
end