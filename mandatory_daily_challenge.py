# Instructions
# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.


number = int(input("Enter a number:"))
length = int(input("Enter a length:"))

for m in range(1, length + 1):
     print(number * m)

# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

user_input = input("Enter something:")
new_input = []

for i in user_input:
     if i not in new_input:
          new_input.append(i)

print(''.join(new_input))




