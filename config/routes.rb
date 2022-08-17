Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy] 

    resources :users, only: [:create, :show] do 
      resources :boards, only: [:index]
    end

    resources :boards, only:  [:show, :create, :update, :destroy]
  end
  
end
