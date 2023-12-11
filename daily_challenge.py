# Exercise 1 
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Exercise 2
# Then, print the first and last characters of the given text

# Exercise 3
# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed.

# Exercise 4
# Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method).

import random

sentance = input("Write a sentance that is exactly 10 charaters:")

if len(sentance) < 10:
    print("String not long enough.")
elif len(sentance) > 10:
    print("String too long.")
elif len(sentance) == 10:
    print("Perfect string!")

first_last = sentance[0], sentance [-1]
print(first_last)

for i in range(len(sentance)):
    print(sentance[:i+1])

s_shuffle = ''.join(random.sample(sentance, len(sentance)))
print(s_shuffle)