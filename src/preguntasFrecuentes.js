const fs = require('fs');

 let preguntasFrecuentes = {
    leerJSON:function(){
            const fs = require("fs");
            return JSON.parse(fs.readFileSync('./data/faqs.json','utf-8'));
        },
        cantidad : function(){
            return preguntasFrecuentes.leerJSON().total_faqs;
        },
 }
module.exports = preguntasFrecuentes;