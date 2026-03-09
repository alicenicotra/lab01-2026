import dayjs from "dayjs";

function Film (filmId, title, favorite=false, watchDate, rating, userId=1) {
    this.filmId = filmId;
    this.title = title;
    this.favorite = favorite;
    this.watchDate = watchDate ? dayjs(watchDate) : null;
    this.rating = (rating >= 1 && rating <=5) ? rating : null;
    this.userId = userId;

    this.toString = () => {
        const watchDate_str = this.watchDate ? this.watchDate.format("MMMM D, YYYY") : "null";
        const rating_str = this.rating ? this.rating : "null";

        return `Id: ${this.filmId}, Title: ${this.title}, Favorite: ${this.favorite}, Watch date: ${watchDate_str}, Rating: ${rating_str}, User id: ${this.userId}`;
    }
}

function FilmLibrary (){
    this.films = [];

    this.addFilms = (film) => {
        this.films.push(film);
    };

    this.getAllFilms = () => {
        this.films.forEach(f => console.log(`${f}`));
    };

    this.getFilmById = (id) => {
        return this.films.filter(f => f.filmId === id);
    };
    
    this.listByDate = () => {
        return [...this.films].sort((a,b) => {
            if (!a.watchDate && !b.watchDate) return 0;

            if (!a.watchDate) return 1;

            if (!b.watchDate) return -1;

            return a.watchDate.diff(b.watchDate);
        });
    };

    this.listByRating = () => {
        return [...this.films].sort((a, b) => {
            // 1. Sposta i valori nulli/indefiniti in fondo
            if (a.rating === undefined || a.rating === null) return 1;
            if (b.rating === undefined || b.rating === null) return -1;
            
            // 2. Se entrambi ci sono, ordina per voto decrescente
            return b.rating - a.rating;
        });
    };

    this.removeFilm = (id) => {
        this.films = this.films.filter(f => f.filmId !== id);
    };

    this.updateRating = (id, newRating) => {
        const film = this.films.find(f => f.filmId === id);
    
        if (film) {
            film.rating = (newRating >= 1 && newRating <= 5) ? newRating : null;
        }
    };

}

const film1 = new Film(1, "Pulp Fiction", true, "2025-03-10", 5, 1);
const film2 = new Film(2, "21 Grams", true, "2025-03-17", 4, 1);
const film3 = new Film(3, "Star Wars", false, undefined, undefined, 1);
const film4 = new Film(4, "Matrix", false, undefined, undefined, 1);
const film5 = new Film(5, "Shrek", false, "2025-03-21", 3, 1);

const library = new FilmLibrary();

library.addFilms(film1);
library.addFilms(film2);
library.addFilms(film3);
library.addFilms(film4);
library.addFilms(film5);

library.getAllFilms();

console.log("\nFilm ordinati per Watch Date: ");
library.listByDate().forEach(f => console.log(`${f}`));

console.log("\nFilm ordinati per Rating: \n" + library.listByRating().join('\n'));

console.log("\nFilm 1: " + library.getFilmById(1));

library.removeFilm(3);
library.getAllFilms();

library.updateRating(1, 3);
console.log("\nFilm 1: " + library.getFilmById(1));
