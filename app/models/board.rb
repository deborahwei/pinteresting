class Board < ApplicationRecord

    validates :name, :user_id, presence: true
    validates :name, uniqueness: { scope: :user_id}
    
    belongs_to :user


end
