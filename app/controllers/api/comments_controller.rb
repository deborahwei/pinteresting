class Api::CommentsController < ApplicationController
    
    def index 
        @pin = Pin.find(params[:pin_id])
        @comments = @pin.comments
        render "api/pins/show"
    end

    def create
        @pin = Pin.find(params[:pin_id])
        # @user = current_user
        @user = User.find(97)
        if @user && @pin 
            @comment = Comment.new({
                user_id: @user.id, 
                pin_id: @pin.id,
                text: params[:text]
            })
            if @comment.save
                render "api/pins/show"
            else
                render json: ["Couldn't save comment"]
            end
        else
            render json: ["Couldn't find pin"]
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment 
            @pin = Pin.find(@comment.pin_id)
            @comment.destroy!
            render "/api/pins/show"
        else
            render json: ["Comment not found"]
        end
    end

end