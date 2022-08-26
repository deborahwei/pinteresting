class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :category
      t.string :pin_id, null: false 
    end
  end
end
