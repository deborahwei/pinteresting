class ChangeDescription < ActiveRecord::Migration[5.2]
  def up
    change_column_default :boards, :description, 0
  end

  def down 
    change_column_default :boards, :description, nil
  end
end
