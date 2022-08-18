Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy] 

    resources :users, only: [:create, :show] do 
      resources :boards, only: [:index, :show]
    end

    resources :boards, only: [:create, :update, :destroy]

  end
  
end
