class Api::BoardsController < ApplicationController

    before_action :find_by_name, only: [:find_by_name]
    before_action :find_boards_by_username, only: [:find_boards_by_username]

    def index
        @boards = Board.where(user_id: params[:user_id])
        render "api/boards/index"

    end

    def show 
        @board = Board.find(params[:id])
        render "api/boards/show"
    end

    def find_by_name
        @board = Board.find_by(name: params[:name])
        render "api/boards/show"
    end

    def find_boards_by_username
        @user = User.find_by(username: params[:username])
        @boards = @user.boards 
        render "api/boards/index"
    end

    def create 
        @board = Board.new(board_params)
        if current_user 
            @board.user_id = current_user.id
        else
            render json: ["You must be logged in to create board"], status: 401
        end

        if @board.save
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy 
        @board = current_user.boards.find(params[:id])
        if @board && @board.delete
            @user = current_user
            render "api/users/show"
        end
    end

    def update
        @board = Board.find(params[:id])

        if ensure_owner_user && @board.update(board_params)
            render "api/boards/show"
        else 
            render json: @board.errors.full_messages, status: 422
        end
        
    end

    private

    def ensure_owner_user 
        current_user.id == @board.user_id
    end

    def board_params 
        params.require(:board).permit(:name, :description)
    end


end
