-- DELETE FROM products WHERE id = 3
-- Must put a condition if not the whole table will be deleted

-- UPDATE products SET name = "iPhone", description = '123'
-- WHERE id = 1
-- ^ condition 

-- SELECT * FROM products
-- Star means all - better not use * don't use (only for testing) make sure to say which tables
-- SELECT name, price FROM products
-- SELECT * FROM products WHERE price > 800 or 'name' or != (not) or WHERE name in (means range)
-- SELECT price | '' | name FROM products (Concatinate, but doesn't change the table)
-- SELECT * FROM products ORDER BY name desc

-- INSERT INTO products (name, price)
-- VALUES ('iPhone', 800),
-- ('Pad', 900)

-- CREATE TABLE products (
-- 	id serial PRIMARY KEY,
-- 	name varchar (255) NOT NULL,
-- 	price integer NOT NULL,
-- 	description varchar (1000)
-- )

-- CREATE TABLE  accounts (
-- 	user_id serial PRIMARY KEY,
-- 	user_name varchar (50) UNIQUE NOT NULL,
-- 	password varchar (50) NOT NULL,
-- 	email varchar (255) UNIQUE NOT NULL,
-- 	create_on timestamp NOT NULL default now(),
-- 	last_login timestamp 
-- )


-- CREATE TABLE myusertable (
-- 	id serial PRIMARY KEY, 
-- 	email varchar (255) UNIQUE NOT NULL,
-- 	password varchar (1000),
-- 	created_date timestamp default now()
-- )

-- UNIQUE
-- NOT NULL
-- PRIMARY KEY
-- FOREIGN KEY

-- select * from myusertable

