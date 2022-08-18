class RecreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.string :user_username, null: false 
      t.string :description, null: false
      t.string "slug"
      t.timestamps
    end

    add_index :boards, [:user_username, :name], unique: true 
  end
end
