SELECT movies.movie_name AS Movie, reviews.review FROM reviews 
LEFT JOIN movies ON reviews.movie_id = movies.id 
ORDER BY movies.movie_name;

