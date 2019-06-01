class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :aboutme, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :zipcode, null: false
      t.string :phone, null: false
      t.integer :capacity, null: false
      t.string :tag, null: false

      t.timestamps
    end

    add_index :restaurants, :city
    add_index :restaurants, :tag
  end
  
end
