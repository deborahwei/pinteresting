class Api::PinsUserController < ApplicationController 

    def create # only for people saving as non creators and adding creator
        @pin = Pin.find(params[:pin_id])
        @user = current_user

        if @user && @pin 
            pins_user_relation = PinsUser.new({
                user_id: @user.id,
                pin_id: @pin.id,
                created_pin: params[:created_pin],
                saved_pin: params[:saved_pin]
            })
            if pins_user_relation.save!
                render "api/pins/show"
            else 
                render json: pins_user_relation.errors.full_messages, status: 422
            end
        else 
            render json: ["Could not find that pin to save"], status: 422
        end

    end

    def update # owner goes from unsaving their own pin to saving it or vice versa
        @user = current_user 
        @pins_user = PinsUser.find_by(user_id: @user.id, pin_id: params[:id]) # pass in pin id through url and pin user params in body
        if @pins_user && @pins_user.update(pin_user_params)
            @pin = Pin.find(@pins_user.pin_id)
            render "api/pins/show"
        else 
            render json: @pinsUser.errors.full_messages, status: 422
        end
    end

    def destroy # unsaving pin from someone who doesn't own it 
        @user = current_user
        @pins_user = PinsUser.find_by(user_id: @user.id, pin_id: params[:id]) # pass in pin id through url
        if @pins_user && @pins_user.delete
            render "api/users/show"
        end
    end
        

    private 

    def pin_user_params 
        params.require(:pins_user).permit(:user_id, :pin_id, :saved_pin)
    end

end