class RemoveFriendlyId < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :slug
    remove_index :users, :slug
    remove_column :users, :slug
  end
end
