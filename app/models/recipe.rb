class Recipe < ApplicationRecord

    has_many :comments
    has_many :users, through: :comments

    validates :foodname, presence: true
    validates :description, presence: true
    validates :ingredients, presence: true
    validates :instructions, presence: true
    validates :country, presence: true
    validates :servings, presence: true
    validates :rating, presence: true
    validates :image, presence: true

    # def self.search(search)
    #     if search
    #         where(["foodname LIKE ?","%#{search}%"])
    #     else
    #         all
    #     end
    # end
end
