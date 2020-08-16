var rc = require("postmonger.js");

var connection = new rc.Session();

connection.trigger('ready');
