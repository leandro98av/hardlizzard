
const fs = require('fs');

let enCartelera = {
    enCartelera : function(){
        const fs = require("fs");
        let movies = JSON.parse(fs.readFileSync('./data/movies.json','utf-8'));
        movies.movies.sort((a, b) => (a.title > b.title)?1:(a.title < b.title)?-1:0);
        return movies.movies
    },
    cantidad : function(){
        return enCartelera.leerJSON().total_movies;
    },
    descripcion : function(){
        return enCartelera.leerJSON().overview;
    }   


}
module.exports = enCartelera;