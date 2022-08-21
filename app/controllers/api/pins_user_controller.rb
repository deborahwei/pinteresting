class Api::PinsUserController < ApplicationController 

    def create # only for people saving as non creators and adding creator
        @pin = Pin.find(params[:pin_id])
        @user = current_user

        if @user && @pin 
            pinsUserRelation = PinsUser.new({
                user_id: @user.id,
                pin_id: @pin.id,
                created_pin: params[:created_pin],
                saved_pin: params[:saved_pin]
            })
            if pinsUserRelation.save!
                render "api/pins/show"
            else 
                render json: pinsUserRelation.errors.full_messages, status: 422
            end
        else 
            render json: ["Could not find that pin to save"], status: 422
        end

    end

    def update # owner goes from unsaving their own pin to saving it or vice versa
        u = User.find(47)
        # @pin = User.retrieve_created_pins(47)
        @pinsUser = PinsUser.find(params[:id])
        # render json: @pin
        # @pin = Pin.retrieve_created_pins(current_user)
        if @pinsUser && @pinsUser.update(pin_user_params)
            # @user = current_user
            @pin = Pin.find(@pinsUser.pin_id)
            render "api/pins/show"
        else 
            render json: @pinsUser.errors.full_messages, status: 422
        end
    end

    def destroy # unsaving pin from someone who doesn't own it 
        @pin = Pin.retrieve_saved_pins(current_user) 
        if @pin && @pin.delete
            @user = current_user 
            render "api/users/show"
        end
    end
        

    private 

    def ensure_owner_user 
        current_user.id == Pin.retreive_creator(@pin.id)
    end

    def pin_user_params 
        params.require(:pins_user).permit(:user_id, :pin_id, :saved_pin)
    end

end