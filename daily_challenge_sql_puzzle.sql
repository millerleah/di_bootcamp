CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab (id, name) 
VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab (id) VALUES
(5),
(NULL)


SELECT * FROM SecondTab

Questions:

Q1. What will be the OUTPUT of the following statement?
SELECT COUNT(*)
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- A1. Count = 0 since the () are selecting NULL ID, but NULL wont show so there are nothing second tab that will be left that is not in firsttab.


Q2. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- A2. Count = 2 since there are 2 that are not 5 and one in NULL.

Q3. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- A3. Count = 0 since there are no ids that are in secondtab that arent in firsttab.

Q4. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- A4. Count = 2 since the () = 5 the only id not NULL and there are 2 in firsttab that are not 5.



