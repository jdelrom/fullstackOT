class Api::SearchesController < ApplicationController
    def show
         str = "%#{params[:id]}%"
         @restaurants = Restaurants
            .joins("LEFT OUTER JOIN reservations ON reservations.restaurant_id = restaurant.id")
            .where("UPPER(restaurants.name) LIKE UPPER(:query) OR 
                    UPPER(restaurants.city) LIKE UPPER(:query) OR
                    restaurants.zipcode = :query OR
                    UPPER(restaurants.tag) LIKE UPPER(:query)
                    ", query: str)
            @restaurants = @restaurants.uniq
            render :show
    end
end