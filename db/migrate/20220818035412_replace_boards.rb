class ReplaceBoards < ActiveRecord::Migration[5.2]
  def change
    drop_table :boards
    create_table :boards do |t|
      t.string :name, null: false
      t.integer :user_id, null: false 
      t.string :description
      t.string "slug"
      t.timestamps
    end

    add_index :boards, [:user_id, :name], unique: true 
  end
end
