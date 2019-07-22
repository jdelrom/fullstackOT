class Api::RestaurantsController < ApplicationController

    def index
        
        if params[:search]
            
            @restaurants = Restaurant.search(params[:search]).includes(:reservations, :rates_reviews, :favorites)
            
            render :index
        else
            
            @restaurants = Restaurant.all.includes(:reservations, :rates_reviews, :favorites)
            render :index
            
        end
    end

    def show
        
        @restaurant = Restaurant.includes(:reservations, :rates_reviews).find(params[:id])
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