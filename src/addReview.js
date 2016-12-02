const dbConn = require('../db_connection');

module.exports = (params, user, resource, cb) => {
  dbConn.query(`SELECT user_id, resource_id FROM users, resources WHERE username=($1) AND title=($2);`,[user, resource], (error, data) => {
    if(error) cb(error)
    else {
      if(data.rows.length === 0){
        cb(new Error('No resource found'));
      }
      let userId = data.rows[0].user_id;
      let resource = data.rows[0].resource_id;
      dbConn.query(`INSERT INTO reviews (time_stamp, rating, summary, description, user_id, resource_id) VALUES ($1, $2, $3, $4, $5, $6 );`, [Date.now(), params.rating, params.summary_input, params.description_input, userId,resource], (error, data) => {
        error ? cb(error) : cb(null);
      });
    }
  });
};
