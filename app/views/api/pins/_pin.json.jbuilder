json.extract! pin, :id, :title, :description, :tag
json.imageUrl url_for(pin.image) if pin.image.attached?
json.creator pin.creator.id

json.comments do 
    pin.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :user_id, :text, :updated_at
        end
    end
end