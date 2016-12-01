const dbConn = require('../db_connection');

module.exports = (cb, params, user, resource) => {
  let getUserId = `SELECT user_id FROM users WHERE username=${user}`
  console.log('userId from database is ',getUserId);
  dbConn.query(`INSERT INTO reviews (time_stamp, rating, summary, description, user_id) VALUES ($1, $2, $3, $4, ${getUserId} );`, [Date.now(), params.rating, params.summary_input, params.description_input], (error, data) => {
    error ? cb(error) : cb(null);
  });
};
