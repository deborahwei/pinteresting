class AddTagToPins < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :tag, :string
    add_index :pins, :tag
  end
end
