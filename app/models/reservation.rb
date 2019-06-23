# == Schema Information
#
# Table name: reservations
#
#  id               :bigint           not null, primary key
#  user_id          :integer          not null
#  restaurant_id    :integer          not null
#  party_size       :integer          not null
#  reservation_time :string           not null
#  reservation_date :date             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Reservation < ApplicationRecord
    validates :user_id, :restaurant_id, :party_size, :reservation_date, :reservation_time, presence: true

    belongs_to :user,
        class_name: :User
    
    belongs_to :restaurant,
        class_name: :Restaurant

end
