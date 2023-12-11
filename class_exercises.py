list1 = [5, 10, 15, 20, 25, 50, 20]

print(list1.index(20))

if 20 in list1:
    index20 = list1.index(20)
    list1.remove(20)
    list1.insert(index20, 200)

print(list1)

a,b,c,d = (10, 20, 30, 40)

print(a)
print(b)
print(c)
print(d)
 

number = int(input("Write a number:"))

for m in range(1, 11):
    print(number, 'X', m, '=', number * m)


result = 1
while result < 11:
    print(result)
    result += 1

school = {'Bobby','Tammy','Jammy','Sally','Danny'}
attendance_list = ['Jammy', 'Bobby', 'Danny', 'Sally']

print(school.difference(attendance_list))

for i, char in enumerate(list(range(100))):
    if char == 50:
        print(i)

my_list = [1, 2, 3, 4, 5]

for i in my_list:
    print(sum(my_list))
    break
   
my_list = [1, 2, 3, 4, 5]

counter = 0

for item in my_list:
    counter = counter + item
print(counter)


user_input = list(input("Enter something:"))

new_input = list(set(user_input))

print(new_input)