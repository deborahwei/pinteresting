Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy] 
    
    get '/users/username/:username', to: 'users#find_by_username', as: 'find_by_username'
    get '/users/:user_id/boards/name/:name', to: 'boards#find_by_name', as: 'find_by_name'
    resources :users, only: [:create, :show, :find_by_username] do 
      resources :boards, only: [:index, :show, :find_by_boardname]
    end

    get '/pins/saved', to: 'pins#find_saved_pins', as: 'find_saved_pins'
    get '/pins/created', to: 'pins#find_created_pins', as: 'find_created_pins'
    resources :pins, only: [:create, :index, :update, :destroy, :show]  
    resources :boards, only: [:create, :update, :destroy]

    resources :pins_user, only: [:create, :destroy, :update]
    resources :board_pins, only: [:index, :create, :destroy]


  end
  
end
