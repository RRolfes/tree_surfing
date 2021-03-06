Rails.application.routes.draw do

  get 'api/tree_houses/search/:location', :to => 'api/tree_houses#search'

  namespace :api, defaults: { format: :json } do
    resources :tree_houses, only: [:show, :index, :create]
    resources :users, only: [:show, :create, :update]
    resources :reviews, only: [:create]
    resources :bookings, only: [:create]
    resource :session, only: [:create, :destroy]
    resource :edit_profile, only: [:show]

  end

  root "static_pages#root"
end
