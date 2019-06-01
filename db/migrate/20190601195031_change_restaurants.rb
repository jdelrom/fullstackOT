class ChangeRestaurants < ActiveRecord::Migration[5.2]
  def change
    change_column :restaurants, :aboutme, :text
  end
end
