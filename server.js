const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "movie_db",
  },
  console.log("connected to the movie database")
);

// Routes

// renders a list of all movies
app.get("/api/movies", (req, res) => {
  db.query("select * from movies", (err, data) => {
    res.json(data);
  });
});

// adds a movie when tested using Insomnia
app.post("/api/add-movie", (req, res) => {
    db.query("Insert into movies (movie_name) values (?)", req.body.movieName, (err, data) => {
        res.json(data);
    });
});

// route successfully updates a movie when tested using Insomnia
app.put("/api/update-review", (req, res) => {
    db.query("insert into reviews (movie_id, review) values (?, ?)", [req.body.movie_id, req.body.review], (err, data) => {
        res.json(data);
    });
});

// route deletes a route when tested using Insomnia
app.delete("/api/movie/:id", (req, res) => {
    db.query("delete from movies where id = ?", req.body.id, (err, data) => {
        res.json(data);
    });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
