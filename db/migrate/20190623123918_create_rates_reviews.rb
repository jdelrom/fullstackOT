class CreateRatesReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :rates_reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :rating, null: false
      t.text :review, null: false

      t.timestamps
    end

    add_index :rates_reviews, :user_id
    add_index :rates_reviews, :restaurant_id
  end
end
