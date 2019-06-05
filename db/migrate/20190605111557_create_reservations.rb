class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :party_size, null: false
      t.datetime :reservation_time, null: false
      t.date :reservation_date, null: false
      
      t.timestamps
    end

    add_index :reservations, :user_id
    add_index :reservations, :restaurant_id
  end
end
