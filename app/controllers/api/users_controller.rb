class Api::UsersController < ApplicationController

    before_action :find_by_username, only: [:find_by_username]

    def index
       @users = User.find_users_by_ids(params[:user_ids])
        if @users
          render "api/users/index"
        else
        render json: ["Oops, something went wrong"], status: 422
        end
    end

    def create
      @user = User.new(user_params)
  
      if @user.save
        login(@user)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def find_by_username
    @user = User.find_by(username: params[:username])
      render "api/users/show"
    end

    def show
      @user = User.find(params[:id])
      render "api/users/show"
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username, :password)
    end
    
end
  