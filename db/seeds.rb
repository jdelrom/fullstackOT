require 'open-uri'
require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.delete_all
User.delete_all

User.create({ email: "userdemo@mock.com", password: "123456", fname: 'user', lname: 'demo'})

urls = [
    "https://open-mesa-seeds.s3.amazonaws.com/bbc.jpg",
    "https://open-mesa-seeds.s3.amazonaws.com/bbq.jpeg",
    "https://open-mesa-seeds.s3.amazonaws.com/download+(1).jpeg",
    "https://open-mesa-seeds.s3.amazonaws.com/download.jpeg",
    "https://open-mesa-seeds.s3.amazonaws.com/fruit.jpeg",
    "https://open-mesa-seeds.s3.amazonaws.com/junk-food.jpg",
    "https://open-mesa-seeds.s3.amazonaws.com/lighthouse.jpg",
    "https://open-mesa-seeds.s3.amazonaws.com/pizza.jpeg",
    "https://open-mesa-seeds.s3.amazonaws.com/salad.jpg",
    "https://open-mesa-seeds.s3.amazonaws.com/salmon.jpeg",
]
# files = urls.map {|url| open(url) }
# User.create({email: "userdemo@mock.com", password: "123456"})
10.times do 
        Restaurant.create({
            name: Faker::Restaurant.name, 
            aboutme: Faker::Restaurant.description,
            address: Faker::Address.street_address,
            city: Faker::Address.city,
            state: Faker::Address.state_abbr,
            zipcode: Faker::Address.zip,
            phone: Faker::PhoneNumber.phone_number,
            capacity: rand(1..100).to_s,
            tag: Faker::Restaurant.type,
            photos: [],
            }) 
        end

# files = urls.map { |url| open(url) }


        
# debugger
# rest.photos.attach(io: files, filename: 'randopic')

