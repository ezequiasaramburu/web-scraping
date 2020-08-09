'use strict';
const express = require('express');
const app = express();
const server = require('http').createServer(app);
require('./routes')(app);

// Start server
server.listen(3000, function() {
  console.log('listening on 3000')
});

// Expose app
exports = module.exports = app;