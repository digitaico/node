'use strict';

// imports
var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on('eventname', eventHandler);



