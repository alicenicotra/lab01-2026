// import
import express from "express";
import morgan from "morgan";
import FilmLibrary from "./FilmLibrary.js"

// init
const app = express();
const port = 3001;

// middlewares
app.use(express.json());
app.use(morgan("dev"));

const library = new FilmLibrary();

/*ROUTES*/

// GET /api/films
app.get("/api/films", (request, response) => {
    library.getAll()
    .then(films => response.json(films))
    .catch((err) => {
        response.status(500).end();
    });
});

// start the server
app.listen(port, () => {console.log(`API server started at http://localhost:${port}`)});