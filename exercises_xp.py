# Exercise 1 : Convert Lists Into Dictionaries
# Instructions
# 1. Convert the two following lists, into dictionaries.
# Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# for item in zip(keys, values): 
#     print(item)

# Exercise 2 : Cinemax
# Instructions
# 1. A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# 2. Given the following object:
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# 3. How much does each family member have to pay ?

# 4. Print out the family’s total cost for the movies.\

# members_price = []
# list_price = []

# for x, y in family.items():
#     if y < 3:
#         members_price.append(f'{x} owes $0')
#         list_price.append(0)
#     elif y > 3 and y < 12:
#         members_price.append(f'{x} owes $12')
#         list_price.append(10)
#     elif y > 12:
#         members_price.append(f'{x} owes $15')
#         list_price.append(15)

# print(f'Each persons bill is: \n{', '.join(members_price)}\nThe total cost is ${sum(list_price)}')

# 5. Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

# family = {}

# members_price = []
# list_price = []

# adding_people = True
# while adding_people:
#     quit = input("Type 'q' to quit or 'c' to continue")
#     if quit == 'q'.lower():
#         break
#     else:
#         name = input("Enter your name: ")
#         age = int(input("Enter your age: "))
#         family[name] = age

# for x, y in family.items():
#     if y < 3:
#         members_price.append(f'{x} owes $0')
#         list_price.append(0)
#     elif y > 3 and y < 12:
#         members_price.append(f'{x} owes $12')
#         list_price.append(10)
#     elif y > 12:
#         members_price.append(f'{x} owes $15')
#         list_price.append(15)

# print(f'Each persons bill is: \n{', '.join(members_price)}\nThe total cost is ${sum(list_price)}')


# Exercise 3: Zara
# Instructions
# 1. Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green


# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.


# brand = {
#     "creation_date": 1975,
#     "creator_name": "Amancio Ortega Gaona",
#     "type_of_clothes": ["men", "women", "children", "home"],
#     "international_competitors": ["Gap", "H&M", "Benetton"],
#     "number_stores": 7000, 
#     "major_color": {
#         "France": "blue",
#         "Spain": "red",
#         "US": ["pink", "green"]
#         }
# }

# 3. Change the number of stores to 2.
# brand["number_stores"] = 2
# print(brand["number_stores"])

# 4. Print a sentence that explains who Zaras clients are.
# print(f'Zara has clothing for {brand["type_of_clothes"][0]}, {brand["type_of_clothes"][1]}, and {brand["type_of_clothes"][2]}. They also have things for a {brand["type_of_clothes"][3]}.')

# 5. Add a key called country_creation with a value of Spain.
# brand["country_creation"] = "Spain"
# print(brand["country_creation"])

# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# print(brand.get("international_competitors"))
# brand["international_competitors"] += ["Desigual"]
# print(brand["international_competitors"])

# 7. Delete the information about the date of creation.
# del brand["creation_date"]
# print(brand.get("creation_date"))

# 8. Print the last international competitor.
# print(brand["international_competitors"][-1])

# 9. Print the major clothes colors in the US.
# print(brand["major_color"]["US"])

# 10. Print the amount of key value pairs (ie. length of the dictionary).
# print(len(brand))

# 11. Print the keys of the dictionary.
# print(brand.keys())

# 12. Create another dictionary called more_on_zara with the following details:
# creation_date: 1975 
# number_stores: 10 000

# more_on_zara = {
#     "creation_date": 1975,
#     "number_stores": 10000
# }


# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# brand.update(more_on_zara)
# print(brand)

# 14. Print the value of the key number_stores. What just happened ?
# print(brand["number_stores"]) #It got writen over by the new dict


# Exercise 4 : Disney Characters
# Instructions
# Use this list :

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# Analyse these results :
# 1. Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# #1/
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# my_dict = {}

# for index, element in enumerate(users):
#     my_dict[element] = index 

# print(my_dict)



# 2. Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# #2/
# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# my_dict = {}

# for index, element in enumerate(users):
#     my_dict[index] = element

# print(my_dict)


#3. Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# #3/ 
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

# sorted_users = sorted(users)

# my_dict = {}

# for index, element in enumerate(sorted_users):
#     my_dict[element] = index 

# print(my_dict)


# 4. Only recreate the 1st result for:
# a. The characters, which names contain the letter “i”.

# my_dict = {}

# for index, element in enumerate(users):
#     if "i" in element:
#         my_dict[element] = index 

# print(my_dict)

# b. The characters, which names start with the letter “m” or “p”.
# my_dict = {}

# for index, element in enumerate(users):
#     if element.startswith("M"):
#         my_dict[element] = index 
#     elif element.startswith("P"):
#         my_dict[element] = index 

# print(my_dict)