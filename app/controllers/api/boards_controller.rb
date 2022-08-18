class Api::BoardsController < ApplicationController
    
    def index
        @boards = Board.where(user_id: params[:user_id])
    end

    def show 
        @board = Board.find(params[:id])
        render "api/boards/show"
    end

    def create 
        @board = Board.new(board_params)
        @board.user_id = current_user.id

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
            render json: ["Could not update board"], status: 422
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
