const homePage = require("./homePage")
const masVotadas = require("./masVotadas")
const contacto = require("./contacto")
const enCartelera = require("./enCartelera")
let movies = homePage.leerJSON();
const preguntasFrecuentes = require("./preguntasFrecuentes")
const sucursales = require("./sucursales");
module.exports = {
    homePage: function (req, res) {

        res.write(`
        inicio\n\n`)
        res.write(`Total de películas: ` + movies.total_movies + "\n\n")
        movies.movies.forEach(movie => {
            res.write("********************************\n\n")
            res.write("Título: " + movie.title + "\n\n")
            res.write("********************************\n\n")
            })
            res.write("\n\n")
            res.write("\n\n")
            res.write(`${homePage.pieDePagina}`);
        res.end() 
    },
    enCartelera: function (req, res) {
        res.write(`Total de Peliculas: ${enCartelera.leerJSON().total_movies} \n\n`)
        let movies = enCartelera.leerJSON() 
        movies.movies.forEach(movie =>{
          res.write(movie.title + '\n')
          res.write(movie.overview + '\n\n')  
        })
        res.end()
    },
    masVotadas: function (req, res) {
        let votadas = masVotadas.masVotadas()
        res.write(`
        mas votadas\n\n`)
        res.write(`********************************\nEstas son las películas más votadas:\n******************************** ` + "\n\n");
        res.write("********************************\n\n")
        res.write("Rating promedio: " + masVotadas.leerJSON() + "\n")
        masVotadas.forEach(movie => {
            res.write("Título: " + movie.title + "\n");
            res.write("Descripción : " + movie.overview + "\n");
            res.write("Rating: " + movie.vote_average + "\n\n");
            res.write("********************************\n\n")
        })
        res.end()
    },
    contacto: function (req, res) {
        res.write(`Nuestro contacto: ${contacto.contacto}`);
        res.end()
    },
    preguntasFrecuentes: function (req, res) {
        let faqs = preguntasFrecuentes.leerJSON().faqs
        res.write(`
        preguntas frecuentes\n\n`)
        res.write("********************************\n\n")
        res.write("Total de preguntas: " + preguntasFrecuentes.leerJSON().total_faqs + "\n\n")
        faqs.forEach(faqs => {
            res.write("Pregunta: " + faqs.faq_title + "\n")
            res.write("Respuesta: " + faqs.faq_answer + "\n\n")
            res.write("********************************\n\n")
        });
        res.end()
    },
    sucursales: function (req, res) {
        let theaters = sucursales.leerJSON().theaters;
        res.write(`
        sucursales\n\n`)
        res.write("********************************\n\n")
        res.write("Contamos con " + sucursales.leerJSON().total_theaters + " sucursales. \n\n")
        theaters.forEach(theaters => {
            res.write("Nombre: " + theaters.name + "\n")
            res.write("Dirección: " + theaters.address + "\n")
            res.write("Descripción: " + theaters.description + "\n")
            res.write("Cantidad de salas: " + theaters.total_rooms + "\n\n")
            res.write("********************************\n\n")
        });
        res.end()

    }
}