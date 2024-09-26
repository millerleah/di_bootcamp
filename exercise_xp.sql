-- Exercise 1 : Items And Customers
-- Create a database called public.
-- Add two tables:
-- items
-- customers.

-- CREATE TABLE items (
-- 	name varchar (255) NOT NULL,
-- 	price integer NOT NULL
-- )

-- CREATE TABLE customers (
-- 	first_name varchar (255) NOT NULL,
-- 	last_name varchar (255) NOT NULL
-- )

-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80

-- INSERT INTO items (name, price) VALUES
-- ('small desk', 100),
-- ('large desk', 300),
-- ('fan', 80)

-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson

-- INSERT INTO customers (first_name, last_name) VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson')

-- Use SQL to fetch the following data from the database:
-- All the items.
-- All the items with a price above 80 (80 not included).
-- All the items with a price below 300. (300 included)
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- All customers whose last name is ‘Jones’.
-- All customers whose firstname is not ‘Scott’.

-- SELECT * FROM items
-- SELECT * FROM items WHERE price > 80
-- SELECT * FROM items WHERE price <= 300
-- SELECT * FROM customers WHERE last_name 'Smith'
-- Nthing will happen because there is no Smith
-- ERROR:  type "last_name" does not exist
-- LINE 1: SELECT * FROM customers WHERE last_name 'Smith'
-- SELECT * FROM customers WHERE last_name = 'Jones'
-- SELECT * FROM customers WHERE first_name != 'Scott'

