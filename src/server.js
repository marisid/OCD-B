"use strict";

const Hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const env = require('env2')('./config.env');
const routes = require('./routes.js');
// const handlebars = require('handlebars');
const Handlebars = require('./configure_handlebars.js');
const server = new Hapi.Server();

server.connection (
  {
  port: process.env.PORT || 4000
  }
);

server.register ([inert, vision], (err) => {
  if (err) throw err;
});

Handlebars(server);

const register = {
  method: 'POST',
  path: '/register',
  handler(req,reply) {

  }
}
server.route(routes);

module.exports = server;
