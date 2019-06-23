# == Schema Information
#
# Table name: rates_reviews
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  rating        :integer          not null
#  review        :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class RatesReview < ApplicationRecord
    validates :user_id, :restaurant_id, :review, presence: true
    validates :rating, inclusion: {in: (1..5), allow_nil: true }

    belongs_to :user,
        class_name: :User
    
    belongs_to :restaurant,
        class_name: :Restaurant


end
