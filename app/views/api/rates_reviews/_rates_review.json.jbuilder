json.extract! rates_review, :id, :user_id, :restaurant_id, :rating, :review

json.author (rates_review.user.fname.capitalize + " " + rates_review.user.lname.capitalize)