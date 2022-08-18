class AddDescriptionToBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :description, :string
  end
end
