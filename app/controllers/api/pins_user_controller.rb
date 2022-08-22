class Api::PinsUserController < ApplicationController 

    
    before_action :save_pin, only: [:save_pin]
    before_action :create_pin, only: [:create_pin]

    def save_pin 
        @pin = Pin.find(params[:pin_id])
        @user = current_user
        if @pin && @user
            if Pin.retrieve_creator(@pin.id) == @user.id # if they are creator then update
                @pins_user = PinsUser.find_by(user_id: @user.id, pin_id: params[:id])
                if @pins_user && @pins_user.update(pin_user_params)
                    @pin = Pin.find(@pins_user.pin_id)
                    render "api/pins/show"
                else 
                    render json: @pinsUser.errors.full_messages, status: 422 
                end
            else # if they are not creator then create 
                pins_user_relation = PinsUser.new({
                    user_id: @user.id,
                    pin_id: @pin.id,
                    created_pin: false,
                    saved_pin: params[:saved_pin]
                })
                if pins_user_relation.save!
                    render "api/pins/show"
                else 
                    render json: pins_user_relation.errors.full_messages, status: 422
                end
            end
        else
            render json: ["Could not find that pin to save"], status: 422
        end
    end

    def unsave_pin 
        @pin = Pin.find(params[:pin_id])
        @user = current_user
        if @pin && @user
            @pins_user = PinsUser.find_by(user_id: @user.id, pin_id: params[:id])
            if Pin.retrieve_creator(@pin.id) == @user.id # if they are creator then update
                if @pins_user && @pins_user.update(pin_user_params)
                    @pin = Pin.find(@pins_user.pin_id)
                    render "api/pins/show"
                else 
                    render json: @pinsUser.errors.full_messages, status: 422 
                end
            else # if they are not creator then delete
                if @pins_user && @pins_user.delete
                    render "api/pins/show"
                end
            end
        else
            render json: ["Could not find that pin to unsave"], status: 422
        end
    end

    def create # only for people saving as non creators 
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