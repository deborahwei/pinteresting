class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.integer :user_id, null: false 
      t.string "slug"
      t.timestamps
    end

    add_index :boards, :slug, unique: true
    add_index :boards, :user_id
  end
end
