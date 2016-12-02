const dbConn = require('../database/db_connection');

module.exports = (params, cb) => {
  dbConn.query('INSERT INTO users (username, password, experience) VALUES ($1, $2, $3);', [params.user, params.password, params.experience], (error, data) => {
    error ? cb(error) : cb(null);
  });
};
