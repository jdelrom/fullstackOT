class Api::RestaurantsController < ApplicationController

    def index
        # debugger
        if params[:search]
            # debugger
            @restaurants = Restaurant.search(params[:search])
            # debugger
            render :index
        else
            # debugger
            @restaurants = Restaurant.all.includes(:reservations)
            render :index
        end
    end

    def show
        # debugger
        @restaurant = Restaurant.find(params[:id])
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