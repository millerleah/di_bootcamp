# Exercise 5: Longest Word Without A Specific Character
# Instructions
# Keep asking the user to input the longest sentence they can without the character “A”.
# Each time a user successfully sets a new longest sentence, print a congratulations message.

sen = input("Write a sentance:")
new_sen = input("Write a longer sentance:")

if new_sen > sen:
    print("Congratulations!!")
else:
    print("Write something longer.")