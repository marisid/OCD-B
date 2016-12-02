"use strict";

const Hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const env = require('env2')('./config.env');
const routes = require('./routes/index.js');
const Handlebars = require('./configure_handlebars.js');
const CookieAuth = require('hapi-auth-cookie');
const server = new Hapi.Server();

server.connection (
  {
  port: process.env.PORT || 4000
  }
);

const options = {
    password: 'm!*"2/),p4:xDs%KEgVr7;e#85Ah^WYC',
    cookie: 'cookie-name',
    isSecure: false,
    ttl: 24 * 60 * 60 * 1000
};

server.register ([inert, vision, CookieAuth], (err) => {
  if (err) throw err;
  server.auth.strategy('base', 'cookie', options)
  server.route(routes);
});

Handlebars(server);

module.exports = server;
