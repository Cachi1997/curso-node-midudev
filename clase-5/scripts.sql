-- creacion de la base de datos
create database moviesdb;

-- usar
use moviesdb;

-- crear la tabla movies
create table movies (
	id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(uuid())),
    title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    director VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    poster TEXT,
    rate DECIMAL(1, 1) UNSIGNED NOT NULL -- indicamos cuantos numeros queremos antes y despues de la coma
);

-- Crear la tabla genre
CREATE TABLE genre (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

-- Crear la relacion entre peliculas y genero
CREATE TABLE movies_genre (
	movie_id BINARY(16) REFERENCES movies(id),
    genre_id INT REFERENCES genres(id),
    PRIMARY KEY (movies_id, genre_id)
);

INSERT INTO genre (name) VALUES
('Drama'),
('Action'),
('Crime'),
('Adventure'),
('Sci-Fi'),
('Romance');

INSERT INTO movie (id, title, year, director, duration, poster, rate) VALUES
(UUID_TO_BIN(uuid()), "Interestellar", 1994, "Christopher Nolan", 180, "https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg", 8.8),
(UUID_TO_BIN(uuid()), "The Shawshank Redemption", 1994, "Frank Darabont", 142, "https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp", 9.0),
(UUID_TO_BIN(uuid()), "The Dark Knight", 1994, "Christopher Nolan", 180, "https://i.ebayimg.com/images/g/yokAAOSw8w1YARbm/s-l1200.jpg", 10.0),