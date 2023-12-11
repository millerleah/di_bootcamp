# Exercise 1 : Hello World-I Love Python
# Instructions
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python

print("Hello world\n" * 4 + "I love python\n" *4)

# Exercise 2 : What Is The Season ?
# Instructions
# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)


month = input("Month of the year by numbers (1-12).")

if int(month) >= 3 and int(month) <= 5:
   print("Spring Showers")
elif int(month) >= 6 and int(month) <=8:
   print("Summer Sun")
elif int(month) >= 9 and int(month) <=11:
   print("Fall Fun")
elif int(month) >= 1 and int(month) <=2 or int(month) == 12:
   print("Winter Wonderland")
else:
   print("Please retry.")