class ChangeRestaurants2 < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :state, :string
  end
end
