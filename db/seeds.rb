# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


restaurant1 = Restaurant.create( {
    name: "Tony's", 
    aboutme: "Elegant, fine dining, meets casual chic modern low key restaurant.  Authentic Italian food",
    address: "123 Sogood Ave",
    city: "New York",
    state: "NY",
    zipcode: "10018",
    phone: "212-222-2122",
    capacity: "50",
    tag: "Italian",
})

restaurant1 = Restaurant.create( {
    name: "Taco Beach", 
    aboutme: "Authentic Mexican cuisine featuring homemade, daily, blue corn flour tortillas.  Providing inspiration recipes from Guadalajara to Monterrey",
    address: "456 Muybien St",
    city: "New York",
    state: "NY",
    zipcode: "10018",
    phone: "212-111-1211",
    capacity: "70",
    tag: "Mexican",  
})

restaurant1 = Restaurant.create( {
    name: "Chen's", 
    aboutme: "Chinese fast food done right.  Taste of authenticity and love in every wonton and noodle.  Smothered in rich spices and delivered hot and fresh guaranteed",
    address: "789 Eggroll Blvd",
    city: "New York",
    state: "NY",
    zipcode: "10018",
    phone: "212-333-3133",
    capacity: "10",
    tag: "Chinese",
})

restaurant1 = Restaurant.create( {
    name: "Gyro Alcove", 
    aboutme: "Mediterranean style cuisine that YOU need and WILL come back for",
    address: "987 Hummus Ave",
    city: "New York",
    state: "NY",
    zipcode: "10018",
    phone: "212-444-4144",
    capacity: "30",
    tag: "Mediterranean",
})

restaurant1 = Restaurant.create( {
    name: "Right Raita", 
    aboutme: "Everything is homemade, we even import things from India.  Family owned, we hold true to tradition",
    address: "654 Nan Ln",
    city: "New York",
    state: "NY",
    zipcode: "10018",
    phone: "212-555-5155",
    capacity: "40",
    tag: "Indian",
})