# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongs_ide the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Board.destroy_all 
Pin.destroy_all

demo_user = User.create({username: 'demo-user', password: 'password'})
user_1 = User.create({username: 'deborah-wei', password: 'password'})

board_1 = Board.create({name: 'snowboarding', user_id: demo_user.id})
board_2 = Board.create({name: 'interior inspo', user_id: user_1.id})
board_3 = Board.create({name: 'pie', user_id: user_1.id})
board_4 = Board.create({name: 'sunsets', user_id: user_1.id})
board_5 = Board.create({name: 'trees', user_id: user_1.id})

pin_1 = Pin.create({title: "snowboard until i die", description: "just made it back from aspen and got these amazing shots"})
image_1 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/alexandra-luniel-86T5I7ZtjmM-unsplash-min.jpg")
pin_1.image.attach(io: image_1, filename:"alexandra-luniel-86T5I7ZtjmM-unsplash-min.jpg")
pin_1.save!

pin_2 = Pin.create({title: "love snowboarding so much!", description: "can't believe i got to do this"})
image_2 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/benjamin-hayward-uZNH-vYGDIQ-unsplash-min.jpg")
pin_2.image.attach(io: image_2, filename:"benjamin-hayward-uZNH-vYGDIQ-unsplash-min.jpg")
pin_2.save!

pin_3 = Pin.create({title: "should i start skiing? ", description: "this journey is crazy"})
image_3 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/benjamin-hayward-YIO9Fb7BJIU-unsplash-min.jpg")
pin_3.image.attach(io: image_3, filename:"benjamin-hayward-YIO9Fb7BJIU-unsplash-min.jpg")
pin_3.save!

pin_4 = Pin.create({title: "wooooo pow pow", description: "so pumped for next season"})
image_4 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/felipe-giacometti-4i5ToPi4K_c-unsplash-min.jpg")
pin_4.image.attach(io: image_4, filename:"felipe-giacometti-4i5ToPi4K_c-unsplash-min.jpg")
pin_4.save!

pin_5 = Pin.create({title: "im so sore", description: "fell on like three hundred jumps"})
image_5 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/felipe-giacometti-ACbHQqST3sY-unsplash-min.jpg")
pin_5.image.attach(io: image_5, filename:"felipe-giacometti-ACbHQqST3sY-unsplash-min.jpg")
pin_5.save!

pins_user_1 = PinsUser.create({user_id: user_1.id, pin_id: pin_1.id, created_pin: true, saved_pin: true})
pins_user_2 = PinsUser.create({user_id: demo_user.id, pin_id: pin_2.id, created_pin: true, saved_pin: true})
pins_user_3 = PinsUser.create!({user_id: demo_user.id, pin_id: pin_3.id, created_pin: false, saved_pin: true})
pins_user_4 = PinsUser.create({user_id: user_1.id, pin_id: pin_2.id, created_pin: false, saved_pin: false})
pins_user_5 = PinsUser.create({user_id: user_1.id, pin_id: pin_3.id, created_pin: false, saved_pin: false})
pins_user_6 = PinsUser.create({user_id: user_1.id, pin_id: pin_4.id, created_pin: true, saved_pin: true})
pins_user_7 = PinsUser.create({user_id: user_1.id, pin_id: pin_5.id, created_pin: true, saved_pin: true})
pins_user_8 = PinsUser.create({user_id: demo_user.id, pin_id: pin_4.id, created_pin: false, saved_pin: false})
pins_user_9 = PinsUser.create({user_id: demo_user.id, pin_id: pin_5.id, created_pin: false, saved_pin: true})

board_pin_1 = BoardPin.create({board_id: board_1.id, pin_id: pin_1.id})
board_pin_2 = BoardPin.create({board_id: board_1.id, pin_id: pin_2.id})
board_pin_3 = BoardPin.create({board_id: board_1.id, pin_id: pin_3.id})
board_pin_4 = BoardPin.create({board_id: board_2.id, pin_id: pin_2.id})
board_pin_5 = BoardPin.create({board_id: board_2.id, pin_id: pin_4.id})
board_pin_6 = BoardPin.create({board_id: board_2.id, pin_id: pin_3.id})
board_pin_7 = BoardPin.create({board_id: board_3.id, pin_id: pin_2.id})
board_pin_8 = BoardPin.create({board_id: board_4.id, pin_id: pin_4.id})
board_pin_9 = BoardPin.create({board_id: board_5.id, pin_id: pin_5.id})


