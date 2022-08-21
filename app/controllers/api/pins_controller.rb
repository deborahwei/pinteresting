class Api::PinsController < ApplicationController

    before_action :find_saved_pins, only: [:find_saved_pins]
    before_action :find_created_pins, only: [:find_created_pins]

    def show 
        @pin = Pin.with_attached_image.find_by(id: params[:id])
        render "api/pins/show"
    end

    def index # returns all the pins for home page
        @pins = Pin.all
        render "api/pins/index" 
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
        @pin = Pin.new(pin_params)

        Pin.transaction do
            if @pin.save!
                pins_user_relation = PinsUser.new({
                    user_id: current_user.id,
                    pin_id: @pin.id,
                    created_pin: true,
                    saved_pin: false
                })
                if pins_user_relation.save!
                    render "api/pins/show"
                end
            else
                render json: @pin.errors.full_messages, status: 422
            end
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
        current_user.id == Pin.retrieve_creator(@pin.id)
    end

    def pin_params 
        params.require(:pin).permit(:title, :description, :image)
    end
end