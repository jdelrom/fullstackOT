Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :create, :show]
    resources :reservations, only: [:create, :show, :index, :destroy]
    resources :rates_reviews, only: [:create, :update, :show, :destroy]
    resources :favorites, only: [:create, :destroy, :show, :index]
  end

end
