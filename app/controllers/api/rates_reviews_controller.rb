class Api::RatesReviewsController < ApplicationController
    # before_action :ensure_logged_in
    # before_action :ensure_auth_user, only: [:destroy, :update]

    def index
        @rates_reviews = RatesReview.all
    end
    ##after doing this feature, edit reservation destroy

    ## for testing purposes
    def show
        @rates_review = RatesReview.find_by(id: params[:id])
        render :show
    end

    ##@
    def create
        # debugger
        @rates_review = RatesReview.new(rates_review_params)
        @rates_review.user_id = current_user.id
        # debugger
        if @rates_review.save!
            render :show
        else
            render json: @rates_review.errors.full_messages, status: 422
        end

    end

    def update
        @rates_review = RatesReview.find_by(id: params[:id])
        # debugger 
        if @rates_review.update(rates_review_params)
            render :show
        else
            render json: @rates_review.errors.full_messages, status: 422
        end

    end

    def destroy
        @rates_review = RatesReview.find_by(id: params[:id])

        if @rates_review.destroy
            render :show
        else
            render json: @rates_review.errors.full_messages, status: 422
        end

    end

    private

    def ensure_auth_user
        rates_review = RatesReview.find_by(id: params[:id])

        render json: ['Only original user can delete this'] unless current_user.id == rates_review.user_id
    end

    def rates_review_params
        params.require(:review).permit(:user_id, :restaurant_id, :rating, :review)
    end
end