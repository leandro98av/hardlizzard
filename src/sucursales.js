const fs = require('fs')


let sucursales = {
    leerJSON:function(){
        const fs = require("fs");
        return JSON.parse(fs.readFileSync('./data/theaters.json','utf-8'));
        },
        cantidad : function(){
            return sucursales.leerJSON().total_theaters;
        },
 }


module.exports = sucursales  