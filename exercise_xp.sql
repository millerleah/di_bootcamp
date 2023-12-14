-- -- Exercise 1: DVD Rental
-- -- Instructions
-- 1. Get a list of all the languages, from the language table.
SELECT name FROM language

-- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT film.title, film.description, language.name 
FROM film 
INNER JOIN language
ON film.film_id = language.language_id

-- 3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT film.title, film.description, language.name 
FROM film 
RIGHT JOIN language
ON film.film_id = language.language_id

-- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
	new_film_id SERIAL PRIMARY KEY,
	name varchar (100) NOT NULL
);

INSERT INTO new_film (name)
VALUES ('Harry Potter'), ('The Hating Game'), ('Seal Team')
	
-- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- 	1. review_id – a primary key, non null, auto-increment.
-- 	2. film_id – references the new_film table. The film that is being reviewed.
-- 	3. language_id – references the language table. What language the review is in.
-- 	4. title – the title of the review.
-- 	5. score – the rating of the review (1-10).
-- 	6. review_text – the text of the review. No limit on the length.
-- 	7. last_update – when the review was last updated.

CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INT NOT NULL,
	language_id INT NOT NULL,
	title varchar (1000) NOT NULL,
	score INT NOT NULL,
	review_text TEXT,
	last_update TIMESTAMP,
	
	CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES new_film(new_film_id) ON DELETE CASCADE,
	CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language(language_id),
	CONSTRAINT score_limt CHECK (score >= 1 and score <= 10)
)

-- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES
(1, 1, 'BEST MOVIE OF ALL TIMES!', 10, 'The movie was great and well made!'), (3, 1, 'Lots of action!', 8, 'The story line was well thought out')

SELECT * FROM customer_review

-- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?

DELETE FROM new_film WHERE new_film_id = 1

SELECT * FROM customer_review
-- The review got deleted as well

-- Exercise 2 : DVD Rental
-- Instructions
-- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = 2
WHERE film_id = 1

SELECT film_id, title, language_id FROM film WHERE (film_id = 1)

-- 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- SELECT * FROM customer
-- store_id and address_id are forgin keys
-- You wouldn't be able to do anything in customer that are blocked by the forign key settings

-- 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review
-- no extra checking

-- 4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT * FROM rental where (return_date is NULL)

-- 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT * FROM rental 
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
LEFT JOIN film on inventory.film_id = film.film_id
WHERE rental.return_date is NULL
ORDER BY film.replacement_cost DESC LIMIT 30

-- 6. Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- 1. The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT film.film_id, film.title, film.fulltext FROM film_actor
INNER JOIN film
ON film.film_id = film_actor.film_id
WHERE (actor_id = (
	SELECT actor_id FROM actor WHERE (first_name = 'Penelope' AND last_name = 'Monroe')
	AND film.fulltext @@ to_tsquery('english', 'sumo')
)) 

-- 2. The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT * FROM film
INNER JOIN film_category
ON film.film_id = film_category.film_id
WHERE film.length < 60 AND film.rating = 'R' AND (film_category.category_id = 6)

-- 3. The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT * FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id 
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE (customer.first_name = 'Matthew' AND customer.last_name = 'Mahan') AND film.rental_rate > 4 AND (rental.return_date > '2005-07-28' AND rental.return_date < '2005-08-01')

-- 4. The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT * FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id 
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE (customer.first_name = 'Matthew' AND customer.last_name = 'Mahan') AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC
LIMIT 1