class ChangeReservations < ActiveRecord::Migration[5.2]
  def change
    change_column :reservations, :reservation_time, :string
  end
end
