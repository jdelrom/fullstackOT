class ChangeRestaurants3 < ActiveRecord::Migration[5.2]
  def change
    change_column :restaurants, :state, :string, null: false
  end
end
