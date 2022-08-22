require 'bcrypt'

class User < ApplicationRecord

    attr_reader :password

    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
  
    after_initialize :ensure_session_token

    has_many :boards, dependent: :destroy
    
    has_many :pin_user_relationships, 
    class_name: :PinsUser, 
    foreign_key: :user_id, 
    dependent: :destroy

    has_many :comments, dependent: :destroy
  
    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            user
        else 
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
      end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
      end
    
    def reset_session_token!
        save!
        self.session_token
    end

    def self.retrieve_pins(user_id)
        Pin.with_attached_image
            .select("pins.id, pins.title, pins.description, pins.created_at, pins_users.created_pin, pins_users.saved_pin")
            .joins(:pin_user_relationships)
            .order("pins.created_at DESC")
            .where("pins_users.user_id = (?)", user_id)
    end

    def self.retrieve_created_pins(user_id)
        Pin.with_attached_image
            .select("pins.id, pins.title, pins.description, pins.created_at, pins_users.created_pin, pins_users.saved_pin")
            .joins(:pin_user_relationships)
            .order("pins.created_at DESC")
            .where("pins_users.user_id = (?) AND pins_users.created_pin = TRUE", user_id)
    end

    def self.retrieve_saved_pins(user_id)
        Pin.with_attached_image
            .select("pins.id, pins.title, pins.description, pins.created_at, pins_users.created_pin, pins_users.saved_pin")
            .joins(:pin_user_relationships)
            .order("pins.created_at DESC")
            .where("pins_users.user_id = (?) AND pins_users.saved_pin = TRUE", user_id)
    end


    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end


end
