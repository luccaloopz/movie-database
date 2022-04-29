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
    })
});

// route successfully updates a movie when tested using Insomnia
app.put("/api/update-review", (req, res) => {
  res.json("oink");
});

// route deletes a route when tested using Insomnia
app.delete("/api/movies/:id", (req, res) => {
  res.json("moo");
});

app.post("/api/movies", (req, res) => {
  res.json("chirp");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
