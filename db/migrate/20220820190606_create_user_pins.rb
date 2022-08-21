class CreateUserPins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins_users do |t|
      t.integer :user_id, null: false
      t.integer :pin_id, null: false 
      t.boolean :created_pin, null: false
      t.boolean :saved_pin, null: false 
      t.datetime
    end

    add_index :pins_users, [:user_id, :saved_pin], unique: true 
  end
end
