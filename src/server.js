"use strict";

const Hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const env = require('env2')('./config.env');
const routes = require('./routes.js')
const handlebars = require('handlebars')
const server = new Hapi.Server();

server.connection (
  {
  port: process.env.PORT || 5432
  }
);

server.register ([inert, vision], (err) => {
  if (err) throw err;
});

server.views ({
  engines: {
    html: handlebars
  },
  relativeTo:__dirname,
  path:'../public'
});

server.route(routes);

module.exports = server;
