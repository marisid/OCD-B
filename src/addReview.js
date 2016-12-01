const dbConn = require('../db_connection');

module.exports = (cb, params, user, resource) => {
  let getUserId = 

  dbConn.query(`SELECT user_id FROM users WHERE username=($1);`,[user], (error, data) => {
    if(error) cb(error)
    else {
      let userId = data.rows[0].user_id;
      console.log(userId);
      dbConn.query(`INSERT INTO reviews (time_stamp, rating, summary, description, user_id) VALUES ($1, $2, $3, $4, $5 );`, [Date.now(), params.rating, params.summary_input, params.description_input, userId], (error, data) => {
        error ? cb(error) : cb(null);
      });
    }
  });


};
