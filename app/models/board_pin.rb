class BoardPin < ApplicationRecord

    validates :pin_id, :board_id, presence: true
    validates :pin_id, uniqueness: { scope: :board_id }

    belongs_to :pin
    belongs_to :board
end
