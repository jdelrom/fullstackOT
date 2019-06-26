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
Reservation.delete_all
RatesReview.delete_all

minutes = ['00', '15', '30', '45']
def random_date_in_year(year)
  return rand(Date.civil(year.min, 1, 1)..Date.civil(year.max, 12, 31)) if year.kind_of?(Range)
  rand(Date.civil(year, 1, 1)..Date.civil(year, 12, 31))
end

User.create({ email: "userdemo@mock.com", password: "123456", fname: 'user', lname: 'demo'})

9.times do 
    User.create({
        email: Faker::Internet.email,
        password: '123456',
        fname: Faker::Name.first_name,
        lname: Faker::Name.last_name
    })
end


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
    rest = Restaurant.create({
        name: Faker::Restaurant.name, 
        aboutme: Faker::Restaurant.description,
        address: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state_abbr,
        zipcode: Faker::Address.zip,
        phone: Faker::PhoneNumber.phone_number,
        capacity: rand(1..100).to_s,
        tag: Faker::Restaurant.type,
        # photos: [],
    }) 
    urls.each_with_index do |url, i|
        file = open(url)
        rest.photos.attach(io: file, filename: "pic_#{i + 1}")
    end
end

10.times do
    rando = random_date_in_year(2017..2019).to_s.split('-').join('/')
    Reservation.create({
        user_id: rand(1..10),
        restaurant_id: rand(1..10),
        party_size: rand(2..14),
        reservation_date: rando,
        reservation_time: (Time.now - rand(10000)).strftime("%I:" + minutes.sample + "%p")
    })
end

30.times do
    RatesReview.create({
        user_id: rand(1..10),
        restaurant_id: rand(1..10),
        rating: rand(1..5),
        review: Faker::Restaurant.review
    })
end
# files = urls.map { |url| open(url) }



# debugger

