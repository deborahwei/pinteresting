@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :name, :description, :user_id
        pins_array = []
        board.pins.each do |pin|
            pins_array << pin.id
        end
        json.pins pins_array
    end
end