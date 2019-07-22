class ChangeFavorites < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, :user_id
    add_index :favorites, :restaurant_id
  end
end
