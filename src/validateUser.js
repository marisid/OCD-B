const dbConn = require('../database/db_connection');

module.exports = (cb, params) => {
  dbConn.query('SELECT username FROM users WHERE (username=($1) AND password=($2));', [params.user, params.password], (error, data) => {
    error ? cb(error) : cb(null,(data.rows.length !== 0 ? true : false));
  });
};
