Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy] 
    
    get '/users/username/:username', to: 'users#find_by_username', as: 'find_by_username'
    get '/users/:user_id/boards/name/:name', to: 'boards#find_by_name', as: 'find_by_name'
    resources :users, only: [:index, :create, :show, :find_by_username] do 
      resources :boards, only: [:index, :show, :find_by_boardname]
    end

    get '/pins/saved', to: 'pins#find_saved_pins', as: 'find_saved_pins'
    get '/pins/created', to: 'pins#find_created_pins', as: 'find_created_pins'
    get 'pins/homepage', to: 'pins#homepage_pins', as: 'homepage_pins'
    resources :pins, only: [:create, :index, :update, :destroy, :show] do 
      resources :comments, only: [:create, :destroy, :index]
    end

    get '/boards/cover/:board_id', to: 'boards#board_cover', as: 'board_cover'
    resources :boards, only: [:create, :update, :destroy] 

    get '/pins_user/save/:pin_id', to: 'pins_user#save_pin', as: 'save_pin'
    get '/pins_user/unsave/:pin_id', to: 'pins_user#unsave_pin', as: 'unsave_pin'
    resources :pins_user, only: [:create, :destroy, :update]
    resources :board_pins, only: [:index, :create, :destroy]

  end
  
end
