json.extract! board, :id, :name, :description, :user_id, :created_at

pins_array = []
board.pins.each do |pin|
    pins_array << pin.id
end
json.pins pins_array