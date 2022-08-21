class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.integer :user_id, null: false #this is the creator of the board 
      t.string :photo_url, null: false 
      t.string :title, null: false
      t.string :description
      t.timestamps
    end

    add_index :pins, :user_id
  end
end
