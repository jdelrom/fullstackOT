class Api::UsersController < ApplicationController

    def index
        @users = User.all
    end

    def create
        @user = User.new(user_params)
        # debugger
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