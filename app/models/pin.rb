class Pin < ApplicationRecord
    
    validates :title, presence: true 
    validate :ensure_image
    has_one_attached :image
    
    has_many :board_to_pin_relationships, 
    class_name: :BoardPin,
    foreign_key: :pin_id, 
    dependent: :destroy

    has_many :pin_user_relationships, 
    class_name: :PinsUser,
    foreign_key: :pin_id,
    dependent: :destroy

    has_many :boards, # boards that saved this pin
    through: :board_to_pin_relationships, 
    source: :board

    has_many :comments, dependent: :destroy

    def ensure_image
      unless self.image.attached?
        errors[:image] << "must be attached"
      end
    end

    def self.find_pins_by_ids(pin_ids)
      return if pin_ids.nil? || pin_ids.empty? 

      Pin.with_attached_image
         .select("pins.*")
         .where("pins.id in (#{pin_ids.join(", ")})")
    end

    def self.retrieve_creator(pin_id)
      sql = """
      SELECT users.id
      FROM users
      JOIN pins_users
      ON users.id = pins_users.user_id
      WHERE pins_users.pin_id = #{pin_id}
      """
      user = ActiveRecord::Base.connection.execute(sql).first
      User.find(user["id"])
    end
  
    # deletes this saved pin from the other peoples profiles 
    def self.delete_from_saved(pin)
        pinSavers = PinsUser.where(pin_id: pin.id)
        if pinSavers
          pinSavers.map {| pinSaver| pinSaver.destroy}
        end
    end

    
end
