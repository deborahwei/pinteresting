class RemoveColumnPins < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :user_id
  end
end
