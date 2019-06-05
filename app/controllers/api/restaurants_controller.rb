class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
        render :index
    end

    def show
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