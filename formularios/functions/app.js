var http = require ('http');
var servidor = http.createServer(function(peticion, respuesta){
    respuesta.writeHead(200,{"content-type":'text/html'});
    respuesta.write('<h3>Probando servidor jáááá nodeJS</h3>');
    console.log("peticion web");
    respuesta.end();
})

servidor.listen(3000);
console.log("ejecutando server local puerto 3k");




var colors = require('colors');

const administrador = {"usuario": "Administrador", "clave": 1234}
console.log(administrador.usuario.green)
var prueba = require('./prueba1');
prueba.suma(5,9);

