class Comment < ApplicationRecord

    validates :text, :user_id, :pin_id, presence: true 

    belongs_to :author, 
    foreign_key: :user_id, 
    class_name: :User

    belongs_to :pin

end

