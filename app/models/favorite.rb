# == Schema Information
#
# Table name: favorites
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Favorite < ApplicationRecord
    validates :user_id, :restaurant_id, presence: true

     belongs_to :user,
        class_name: :User
    
    belongs_to :restaurant,
        class_name: :Restaurant

end
