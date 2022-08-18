class EditBoards < ActiveRecord::Migration[5.2]
  def change
    add_index :boards, [:user_id, :name], unique: true 
    remove_index :boards, :slug
  end
end
