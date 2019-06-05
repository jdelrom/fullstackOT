class Api::ReservationsController < ApplicationController
    before_action :ensure_logged_in
    # before_action :ensure_auth_user, only: :destroy


    def create
        @reservation = Reservation.new(reservation_params)
        # debugger
        @reservation.user_id = current_user.id
        # debugger
        if @reservation.save!
            #push reservation id onto user and restaurant
            #set up an array with user and restaurant to take in 
            #reservation ids? 
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find[params[:id]]

        if @reservation.destroy
            render :show
        else
            render json: @reservation.errors.full_messages
        end

    end

    private

    def reservation_params
        # debugger
        params.require(:reservation).permit(
            :party_size,
            :reservation_time,
            :reservation_date,
            :restaurant_id,
            :user_id
        )
    end

    def ensure_auth_user
        reservation = Reservation.find_by(id: params[:id])

        render json: ['Only original user can delete this'] unless current_user == reservation.user
    end
end