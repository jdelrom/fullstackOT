# == Schema Information
#
# Table name: restaurants
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  aboutme    :text             not null
#  address    :string           not null
#  city       :string           not null
#  zipcode    :string           not null
#  phone      :string           not null
#  capacity   :integer          not null
#  tag        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  state      :string           not null
#

class Restaurant < ApplicationRecord
    validates :name, :aboutme, :address, :city, :zipcode, :phone, :capacity, :tag, presence: true

    has_many_attached :photos
end
