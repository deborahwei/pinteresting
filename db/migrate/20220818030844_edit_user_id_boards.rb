class EditUserIdBoards < ActiveRecord::Migration[5.2]
  def change

    drop_table :boards 
  end
end
