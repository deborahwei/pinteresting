class CreatePinsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :pins_users do |t|
      t.integer :user_id, null: false
      t.integer :pin_id, null: false 
      t.boolean :created_pin, null: false
      t.boolean :saved_pin, null: false 
      t.timestamps
    end

    add_index :pins_users, [:user_id, :pin_id], unique: true
  end
end
