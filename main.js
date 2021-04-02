'Use strict';

var events = require("events");

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
	console.log('listener1 executed');
}

var listener2 = function listener2() {
	console.log('listener2 executed');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount (eventEmitter, 'connection');
console.log(eventListeners + 'Listener(s) listening to connection event');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener 1 ya no listen');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' Listener(s) listening to connection event');

console.log('program termimnprogram termimnoo');
