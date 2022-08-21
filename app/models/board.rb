class Board < ApplicationRecord

    validates :name, :user_id, presence: true
    validates :name, uniqueness: { scope: :user_id}
    
    belongs_to :user

    has_many :board_to_pin_relationships, 
    class_name: :BoardPin,
    foreign_key: :board_id, 
    dependent: :destroy

    has_many :pins, 
    through: :board_to_pin_relationships,
    foreign_key: :pin_id, 
    dependent: :destroy

    def remove_pin(pin)
        board_to_pin_relationships.find_by(pin_id: pin.id).destroy
    end

end
