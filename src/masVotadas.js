const homePage = require("./homePage")

let masVotadas = {
        leerJSON : function(){
            const fs = require("fs");
            return JSON.parse(fs.readFileSync('./data/movies.json','utf-8'));
            movies.sort((a, b) => (a.vote_average > b.vote_average)?1:(a.vote_average < b.vote_average)?-1:0);
            if (peliculas.vote_average >=7){
            return movies.vote_average
         }
        },
        cantidad : function(){
            return masVotadas.leerJSON().total_movies;
        },
        rating : function(){
        let peliculas = masVotadas.leerJSON().movies;
        let rating = peliculas.filter(function(peliculas){
            return peliculas.vote_average >=7
        })
        return rating
     }

}
module.exports = masVotadas