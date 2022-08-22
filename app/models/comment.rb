class Comment < ApplicationRecord

    validates :text, :user_id, :pin_id, presence: true 

end

