'Use strict';

// imports
var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('conexion exitosa!');

	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', () => {
	console.log('data recibida exitosamente!');
})

eventEmitter.emit('connection');

console.log('programa terminado');


