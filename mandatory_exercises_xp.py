# Exercise 1 : Set
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# my_fav_numbers = {1, 2, 3, 4, 5, 6}
# my_fav_numbers.add(7)
# my_fav_numbers.add(8)
# my_fav_numbers.remove(8)
# friend_fav_numbers = {4, 5, 6, 7, 8}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

# Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# tup_int = (1, 2, 3, 4, 5)
# You can't add to a tuple, but you can combind two tuples to form a new one with all the information
# print(tup_int)

# Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# basket.remove("Banana")
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# basket.count("Apples")
# print(basket)
# basket.clear()
# print(basket)

# Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?

# A integer is a whole number and a float is a number with a decimal
# num = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]

# import numpy as np

# for n in np.arange(0, 6, 0.5):
#     print(n)

# Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
          
# for n in range(1, 21):
#     print(n)

# for n in range(2, 21, 2):
#     print(n)
    

# Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# name = ''
# while name != "Keren":
#     name = input("What is your name:")

# print("Correct name!")


# Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# user_input = input("Please type your favorite fruits:")

# fruits = user_input.split()

# print(fruits)

# choice = input("Pick a fruit:")

# if choice in fruits:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy")


# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).


# all_toppings = []

# total = 10

# order_toppings = True 
# while order_toppings:
#     topping = input('Enter a pizza topping or "quit" to quit')
#     if topping == "quit".lower():
#         print(f"List of toppings you ordred are:{', '.join(all_toppings)}. Your total is {total} ")
#         break
#     else:
#         all_toppings.append(topping)
#         total += 2.5

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.
# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

# list_price = []

# adding_people = True
# while adding_people:
#     age = input('Press "done" to quit. Please type an age of a person in your party:')
#     if age == 'done'.lower():
#         print(f'Your total is ${sum(list_price)}')
#         break
#     age = int(age)
#     if age < 3:
#         list_price.append(0)
#     elif age > 3 and int(age) < 12:
#         list_price.append(10)
#     elif age > 12:
#         list_price.append(15)

# name_teen = ['Harry', 'Ron', 'Hermini', 'Jenny', 'Malfoy', 'crab', 'goyal']

# for name in name_teen[:]:
#     print(f"Hi, {name}!")
#     age_teen = input("How old are you:")
#     while name_teen:
#         age_teen = int(age_teen)
#         if age_teen > 16 and age_teen < 21:
#             print("You are old enough to watch!")
#         elif age_teen > 21:
#             print("You are old enough to watch!")
#         elif age_teen < 16:
#             print("You are to young to watch, sorry!")
#             name_teen.remove(name)
#         break
# print(f'The teens who can enter the movie are:\n{name_teen}')


# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# while "Pastrami sandwich" in sandwich_orders:
#     sandwich_orders.remove("Pastrami sandwich")

# finished_sandwiches = []

# while sandwich_orders:
#     sandwich = sandwich_orders.pop(0)
#     print(f"I made your {sandwich}")




