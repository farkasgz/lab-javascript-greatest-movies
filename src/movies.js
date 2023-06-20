// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    //1.0
    const directors =  moviesArray.map(movie => movie.director);
    //1.1

    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {return 0};
    const SpielbergDramas = moviesArray
        .filter(movie => movie.director === "Steven Spielberg")
        .filter(movie => movie.genre.includes("Drama"));
        

    return SpielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {return 0};
    const averageScore = moviesArray
        .map(movie => movie.score)
        .filter(score => typeof score === "number")
        .reduce((acc, current) => acc + current) / moviesArray.length;
    return Math.round(averageScore*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const Dramas = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(Dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesOrdered = moviesArray
        .sort((a, b) => {
            if (a.title < b.title) {
            return -1;
            }
            if (a.title > b.title) {
            return 1;
            }
            return 0;
        })
        .slice()
        .sort((a, b) => a.year - b.year);
    return moviesOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitlesOrdered = moviesArray
        .sort((a, b) => {
            if (a.title < b.title) {
            return -1;
            }
            if (a.title > b.title) {
            return 1;
            }
            return 0;
        })
        .map(movie => movie.title);
    if (movieTitlesOrdered.length > 20) {movieTitlesOrdered.splice(20)}
    return movieTitlesOrdered;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesLenghtMinutes = structuredClone(moviesArray);
    moviesLenghtMinutes.forEach(movie => {
        const time = movie.duration.split(" ");
        movie.duration = parseInt(time[0])*60 + parseInt(time[1]);
    });
    
    return moviesLenghtMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
