-- Exercise 1 : Bootcamp
-- Create
-- Create a database called bootcamp.
-- Create a table called students.
-- Add the following columns:
-- id
-- last_name
-- first_name
-- birth_date
-- The id must be auto_incremented.
-- Make sure to choose the correct data type for each column.
-- To help, here is the data that you will have to insert. (How do we insert a date to a table?)

-- CREATE TABLE students (
-- 	student_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (255) NOT NULL,
-- 	last_name VARCHAR (255) NOT NULL,
-- 	birth_date DATE
-- )

-- Insert
-- Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).

INSERT INTO students (first_name, last_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03')

-- Select
-- Fetch all of the data from the table.
-- Fetch all of the students first_names and last_names.
-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
-- Fetch the students whose first_names contain the letter a.
-- Fetch the students whose first_names start with the letter a.
-- Fetch the students whose first_names end with the letter a.
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- Fetch the students whose id’s are equal to 1 AND 3 .
-- Fetch all of students whose birth_dates are equal to or come after 1/01/2000. (show all their info).

-- SELECT * FROM students
-- SELECT first_name, last_name FROM students
-- SELECT first_name, last_name FROM students WHERE student_id = 2
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_'
-- SELECT first_name, last_name FROM students WHERE student_id = 1 or student_id = 3
-- SELECT * FROM students WHERE birth_date >= '2000-01-01'

-- Exercise 1 : Bootcamp
-- Instructions
-- Continuation of the Exercise XP

-- Select
-- For the following questions, you have to fetch the first_names, last_names and birth_dates of the students.

-- Fetch the first four students. You have to order the four students alphabetically by last_name.
-- Fetch the details of the youngest student.
-- Fetch three students skipping the first two students.

-- SELECT first_name, last_name, birth_date FROM students FETCH FIRST 3 ROWS ONLY ORDER BY last_name ASC
-- SELECT first_name, last_name, birth_date FROM students WHERE birth_date = (SELECT MIN(birth_date) FROM students)
-- SELECT first_name, last_name, birth_date FROM students OFFSET 2

