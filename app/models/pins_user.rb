class PinsUser < ApplicationRecord

    validates :user_id, :pin_id, presence: true
    validate :validate_sole_creator, on: :create
    validates :user_id, uniqueness: { scope: :pin_id } 
    # only one relationship between a pin and a person (no having the same person with the same pin again )

    belongs_to :user
    belongs_to :pin 


    def validate_sole_creator
        params = {
            pin_id: self.pin_id,
            created_pin: true
        }
        pins_user = PinsUser.find_by(params)

        if pins_user && pins_user.user_id == self.user_id
            errors.add(:pin_id, "already has a creator")
        end
    end
    
end
