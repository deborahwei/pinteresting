Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy] 
    
    get '/users/username/:username', to: 'users#find_by_username', as: 'find_by_username'
    get '/users/:user_id/boards/name/:name', to: 'boards#find_by_name', as: 'find_by_name'
    resources :users, only: [:create, :show, :find_by_username] do 
      resources :boards, only: [:index, :show, :find_by_boardname]
    end


    resources :boards, only: [:create, :update, :destroy]

  end
  
end
