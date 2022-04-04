# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'byebug'

User.destroy_all 
ApplicationRecord.connection.reset_pk_sequence!('users')

# demo user
demo = User.create!({username: 'demo', password: '123123', email: 'demo@email.com', fname: 'demo', lname: 'user', birthday: '1990-01-01'})
