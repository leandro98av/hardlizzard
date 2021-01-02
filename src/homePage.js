const fs = require('fs');

let homePage = {
    cantidad : function(){
        return homePage.leerJSON().total_movies;
        
    },
    leerJSON : function(){
        const fs = require("fs");
        let movies = JSON.parse(fs.readFileSync('./data/movies.json','utf-8'));
        movies.movies.sort((a, b) => (a.title > b.title)?1:(a.title < b.title)?-1:0);
        return movies 
    },   
    pieDePagina : "Recorda que podes visitar nuestros otros apartados tipeando en la url lo siguiente: /mas-votadas , /en-cartelera , /sucursales , /preguntas-frecuentes y /contacto"
    }
    
module.exports = homePage;