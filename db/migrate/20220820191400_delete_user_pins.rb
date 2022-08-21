class DeleteUserPins < ActiveRecord::Migration[5.2]
  def change
    drop_table :user_pins
  end
end
