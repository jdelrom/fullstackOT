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
    # include PgSearch
    validates :name, :aboutme, :address, :city, :zipcode, :phone, :capacity, :tag, presence: true
    
    has_many :reservations,
        class_name: :Reservation
    
    has_many :rates_reviews,
        class_name: :RatesReview

    has_many :users,
        through: :reservations,
        source: :user

    has_many :favorites,
        class_name: :Favorite
        
    has_many_attached :photos

    # pg_search_scope :find_by_type, against: [
    #     :name, 
    #     :aboutme, 
    #     :address, 
    #     :city, 
    #     :zipcode, 
    #     :phone, 
    #     :capacity, 
    #     :tag
    # ], using: {
    #         tsearch: { 
    #             prefix: true,
    #             any_word: true,
    #         }
    #     }

    def self.search(params)
        str = "%#{params}%"
        @restaurants = Restaurant
            .joins("LEFT OUTER JOIN reservations ON reservations.restaurant_id = restaurants.id")
            .where("UPPER(restaurants.name) LIKE UPPER(:query) OR 
                    UPPER(restaurants.city) LIKE UPPER(:query) OR
                    UPPER(restaurants.tag) LIKE UPPER(:query) OR
                    restaurants.zipcode = :query", query: str)
            # @restaurants = @restaurants.uniq
    end
end
