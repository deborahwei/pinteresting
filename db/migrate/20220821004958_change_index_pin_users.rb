class ChangeIndexPinUsers < ActiveRecord::Migration[5.2]
  def change
    remove_index :pins_users, [:user_id, :saved_pin]
    add_index :pins_users, [:user_id, :pin_id]
  end
end
