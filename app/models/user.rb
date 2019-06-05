# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates_presence_of :email, message: "Please enter your email"
    validates_presence_of :fname, message: "Please enter your first name"
    validates_presence_of :lname, message: "Please enter your last name"
    validates_presence_of :password_digest, message: "Plesae enter your password"
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, maximum: 20, allow_nil: true }
    
    after_initialize :ensure_session_token

    has_many :reservations,
        class_name: :Reservation

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        # debugger
            @password = password
            self.password_digest = BCrypt::Password.create(password)       
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

end
