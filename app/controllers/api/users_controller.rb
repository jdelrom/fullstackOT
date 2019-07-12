class Api::UsersController < ApplicationController

    def index
        @users = User.all.includes(:restaurants, :reservations, :rates_reviews)
    end

    def show
        @user = User.includes(:reservations, :rates_reviews).find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
        
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname)
    end

end