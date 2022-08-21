class Api::BoardPinsController < ApplicationController

    def index # gets all pins on board
        if params[:board_id]
            board = Board.find_by(id: params[:board_id])
            @pins = board.pins
            render "api/pins/index"
        else
            render json: ["Something went wrong"], status: 422
        end
    end

    def create
        new_pin_on_board = BoardPin.new(board_pin_params)
        @board = Board.find(params[:board_pin][:board_id])

        if @board && new_pin_on_board.save
            render "api/boards/show"
        else
            render json: new_pin_on_board.errors, status: 422
        end
    end

    def destroy
        @board ||= Board.find_by(id: params[:board_id])
        @pin ||= Pin.find_by(id: params[:pin_id])
        if !@board || !@pin
            render json: ["Something went wrong"], status: 422
        end
        if @board.remove_pin(@pin)
            render "api/boards/show"
        else
            render json: ["Something went wrong"], status: 422
        end

    end

    private

    def board_pin_params
        params.require(:board_pin).permit(:board_id, :pin_id)
    end
    
end