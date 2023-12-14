-- Exercise 1 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.

-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- All last names (no other columns!), in reverse alphabetical order (Z-A)

SELECT * FROM items ORDER BY price ASC
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC
SELECT * FROM customers ORDER BY last_name ASC LIMIT 3 
SELECT last_name FROM customers ORDER BY last_name DESC

-- -- Exercise 2 : Dvdrental Database
-- -- Instructions
-- -- Setup
-- -- We will install a new sample database on our PostgreSQL servers.
-- -- 1. Download this sample database file
-- -- 2. There is a single file called dvdrental.tar inside the zip. Extract it to your local directory.
-- -- 	Tip : If you are using Mac, after extracting the zip file you will get a folder called dvdrental
-- -- 3. Go to pgAdmin4, and navigate to Databases on the left panel.
-- -- 4. Right click > Create > Database…
-- -- 5. Type in the name of the new database: dvdrental, and click Save. Wait a few moments.
-- -- 6. Right click on dvdrental under Databases in the left panel.
-- -- 7. Click Restore….
-- 8. For PC users choose the following format Custom or tar. For Mac Users, choose the following format Directory.
-- 9. Next to Filename, you should see a button with 3 dots on it. Click the button.
-- 10. For PC users: “Find your file in the window”. For Max users: “Find your folder in the window”. (you may have to check Show hidden files and folders?), and click the Select button.


-- If You Get Errors:
-- 1. If you receive a “Utility not found” Error, you need to change pgadmin binary path. Check out this video
-- 2. If you receive an error of binary path :
-- - Go to your computer documents -> C: (on windows) -> Program Files -> PostgreSQL -> your version -> bin. Copy this path, it should be something like this : C:\Program Files\PostgreSQL\15\bin.
-- - In pgAdmin select File -> Preferences -> Path -> Binary Path -> scroll down to PostgreSQL Binary Path -> Find your PostgreSQL version -> paste the path -> Save
-- 3. If you see any other error messages, please save them and get assistance. If not, you should have a new database loaded into your server!
-- If you have a problem importing the database, here are the DEFAULT instructions

-- We will use the newly installed dvdrental database.



-- -- Exercise 2 : Dvdrental Database
-- 1. In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer

-- 2. Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT CONCAT( first_name, ' ', last_name) AS full_name FROM customer 

-- 3. Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date FROM customer 

-- 4. Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT * FROM customer ORDER BY first_name DESC

-- 5. Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate

-- 6. Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address, phone FROM address WHERE district = 'Texas'

-- 7. Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM film WHERE film_id = 15 or film_id = 150

-- 8. Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Harry Potter'

-- 9. No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'Ha%'

-- 10. Write a query which will find the 10 cheapest movies.
SELECT * FROM film ORDER  BY rental_rate LIMIT 10

-- 11. Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- 	Bonus: Try to not use LIMIT.
SELECT * FROM film ORDER  BY rental_rate OFFSET 10 FETCH FIRST 10 ROWS ONLY


-- 12. Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id

-- 13. You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT * FROM film
LEFT JOIN inventory 
ON film.film_id = inventory.film_id
WHERE inventory_id is NULL

-- 14. Write a query to find which city is in which country.
SELECT * FROM city
INNER JOIN country
ON city.country_id = country.country_id

-- 15. Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.

SELECT customer.customer_id, customer.first_name, customer.last_name, payment.staff_id
FROM payment
INNER JOIN customer
ON customer.customer_id = payment.customer_id
ORDER BY staff_id ASC
