json.extract! @pin, :id, :title, :description
json.imageUrl url_for(@pin.image) if @pin.image.attached?
json.extract! @pins_user, :saved_pin, :created_pin if @pins_user