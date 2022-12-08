class User < ApplicationRecord

    has_many :comments
    has_many :recipes, through: :comments

    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :password, presence: true
    validates :password, length: { in: 6..20 }
    validates :password_confirmation, presence: true


end
