json.extract! @pin, :id, :title, :description
json.imageUrl url_for(@pin.image) if @pin.image.attached?

