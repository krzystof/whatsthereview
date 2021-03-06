"use strict"

class Movie {
    constructor(type, name, pictureUrl, score, matchingScore) {
        this.type = type;
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.score = score;
        this.matchingScore = matchingScore;
    }
}

Movie.TYPE_MOVIE = 'MOVIE';
Movie.TYPE_TV_SHOW = 'TV_SHOW';

export default Movie;
