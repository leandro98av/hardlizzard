const fs = require("fs")
let faqs = {
leerJSON : function(){
    return JSON.parse(fs.readFileSync("./data/faqs.json","utf-8"))
},
    total : function(){
        return faqs.leerJSON().total_faqs
    },
    preguntas : function(){
        return faqs.leerJSON().faqs
    },
    titulo : `PREGUNTAS FRECUENTES`,
}

module.exports = faqs