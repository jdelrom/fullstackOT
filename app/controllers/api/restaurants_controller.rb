class Api::RestaurantsController < ApplicationController

    def index
        # debugger
        if params[:search]
            # debugger
            @restaurants = Restaurant.search(params[:search]).includes(:reservations, :rate_reviews)
            # debugger
            render :index
        else
            # debugger
            @restaurants = Restaurant.all.includes(:reservations, :rate_reviews)
            render :index
        end
    end

    def show
        # debugger
        @restaurant = Restaurant.includes(:reservations, :rate_reviews).find(params[:id])
        render :show
    end
    
    private

    def restaurant_params
        params.require(:restaurant).permit(
            :id, 
            :name, 
            :aboutme, 
            :address, 
            :city, 
            :zipcode, 
            :phone, 
            :capacity, 
            :tag, 
            :state, 
            photos: []
            )
    end

end