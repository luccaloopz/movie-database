SELECT movies.movie_name AS Movie, reviews.review FROM reviews 
LEFT JOIN movies ON reviews.movie_id = movies.id 
ORDER BY movies.movie_name;

UPDATE movies
SET movie_name = "Harry Potter Chamber of Secrets"
WHERE id = 1;

UPDATE movies
SET movie_name = "Fantastic Beasts the Secrets of Dumbledore"
WHERE id = 2;

UPDATE movies
SET movie_name = "Detroit Rock City"
WHERE id = 3;

UPDATE movies
SET movie_name = "Se7en"
WHERE id = 4;

UPDATE movies
SET movie_name = "Snatch"
WHERE id = 5;