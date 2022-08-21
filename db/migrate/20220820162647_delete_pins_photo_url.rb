class DeletePinsPhotoUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :photo_url
  end
end
