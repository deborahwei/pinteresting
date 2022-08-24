class Api::PinsController < ApplicationController

    before_action :find_saved_pins, only: [:find_saved_pins]
    before_action :find_created_pins, only: [:find_created_pins]

    def show 
        @pin = Pin.with_attached_image.find_by(id: params[:id])
        render "api/pins/show"
    end

    def index 
        @pins = Pin.find_pins_by_ids(params[:pin_ids])
        if @pins
            render "api/pins/index"
        else
            render json: ["Oops, something went wrong"], status: 422
        end
    end
    
    def find_saved_pins
        @pins = User.retrieve_saved_pins(params[:user_id])
        render "api/pins/index" 
    end

    def find_created_pins
        @pins = User.retrieve_created_pins(params[:user_id])
        render "api/pins/index" 
    end
    
    def create 
        if !current_user 
            render json: "You must be logged in to create Pin"
        end
        
        @pin, error_message = Pin.safe_create(pin_params, current_user.id)
        if !@pin.nil?
            render "api/pins/show"
        else
            render json: error_message, status: 422
        end

    end

    def update 
        @pin = Pin.with_attached_image.find_by(id: params[:id])
        if ensure_owner_user && Pin.update(pin_params)
            Pin.save
            render "api/pins/show"
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def destroy
        @pin = Pin.find_by(id: params[:id])

        if @pin.destroy && Pin.delete_from_saved(@pin)
            render "api/pins/show"
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    private 

    def ensure_owner_user 
        current_user.id == @pin.creator.id
    end

    def pin_params 
        params.require(:pin).permit(:title, :description, :image)
    end
end