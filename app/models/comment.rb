class Comment < ApplicationRecord

    validates :text, :user_id, :pin_id, presence: true 

    belongs_to :user
    belongs_to :pin_id

end

