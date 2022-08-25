class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :text, null: false
      t.integer :user_id, null: false 
      t.integer :pin_id, null: false
      t.timestamps
    end

    add_index :comments, :user_id
    add_index :comments, :pin_id
  end
end
