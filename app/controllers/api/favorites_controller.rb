class Api::FavoritesController < ApplicationController
    before_action :ensure_auth_user, only: :destroy

    def create
        @favorite = Favorite.new(favorite_params)
        @favorite.user_id = current_user.id

        if @favorite.save!
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422
        end

    end

    def index
        @favorites = Favorite.where(restaurant_id: params(:restaurant_id))
        render :index
    end

    def destroy
        @favorite = Favorite.find(params[:id])

        if @favorite.destroy
            render :show
        else
            render json: @favorite.errors.full_messages
        end

    end

    private

    def favorite_params
        params.require(:favorite).permit(
            :restaurant_id,
            :user_id
        )
    end
    
    def ensure_auth_user
        favorite = Favorite.find_by(id: params[:id])

        render json: ['Only original user can delete this'] unless current_user == favorite.user
    end


end