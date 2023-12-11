my_age = 25 + 123879
print(my_age)

first_name = "Keren"
last_name = "Miller"
print(first_name + " " + last_name)

# int - How many cars there are
cars = 100
# float - How much space is in car
space_in_a_car = 4.0
# int - How many drivers there are
drivers = 30
# int - How many passangers there are
passengers = 90
# int -Subtacts driver from cars to see hoe many cars are left without a driver
cars_not_driven = cars - drivers
# int - How many cars that have drivers
cars_driven = drivers
# float - How many total spaces 
carpool_capacity = cars_driven * space_in_a_car
# int - avarage passangers per car
average_passengers_per_car = passengers / cars_driven


print(f"There are {cars} cars available.")
print(f"There are only {drivers} drivers available.")
print(f"There will be {cars_not_driven} empty cars today.")
print(f"We can transport {carpool_capacity} people today.")
print(f"We have {passengers} to carpool today.")
print(f"We need to put about {average_passengers_per_car} in each car.")


age = input("How old are you? ")
print(f"You are {age} years old")

#You are ___ years old


number = int(input("Type a number 1 - 100:"))

if number % 3 == 0 and number % 5 == 0:
    print("FizzBuzz")
elif number % 3 == 0:
    print("Fizz")
elif number % 5 == 0:
    print("Buzz")

birth_year = int(input("What year were you born?"))
age = 2023 - birth_year

print(f'Your age is {age}.')

username = input("Username:")
password = input("Password:")

length = len(password)
hidden_length = "*" * length

print(f'Your user name is {username} and your passowrd it is {hidden_length} is {length} letters long.')

is_magician = False
is_expert = True



if is_magician and is_expert:
    print("You are a master magician.")
elif is_magician and not is_expert:
    print("at least you're getting there.")
elif not is_magician:
    print("You need magic powers.")
