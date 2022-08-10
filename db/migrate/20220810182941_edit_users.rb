class EditUsers < ActiveRecord::Migration[5.2]
  def change
    remove_columns :users, :email
    remove_columns :users, :age
  end
end
