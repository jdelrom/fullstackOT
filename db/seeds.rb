require 'open-uri'
require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
        Restaurant.create( {
        name: Faker::Restaurant.name, 
        aboutme: Faker::Restaurant.description,
        address: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state_abbr,
        zipcode: Faker::Address.zip,
        phone: Faker::PhoneNumber.phone_number,
        capacity: rand(1..100).to_s,
        tag: Faker::Restaurant.type,
    })
end
