@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :name, :description, :user_id
    end
end