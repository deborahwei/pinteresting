@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :text, :user_id
    end
end