const dbConn = require('../db_connection');

module.exports = {
  recentReviews: (cb, username) => {
    let reviewsUsersJoin =`SELECT * FROM reviews INNER JOIN users ON reviews.user_id = users.user_id`;
    let reviewsResourcesJoin = `INNER JOIN resources ON reviews.resource_id = resources.resource_id`;
    dbConn.query(`${reviewsUsersJoin} ${reviewsResourcesJoin} WHERE username!=($1) ORDER BY time_stamp DESC LIMIT 3`,[username], (error, data) => {
       error ? cb(error) : cb(null, data.rows);
    });
 },
 resources: (cb) => { // UPDATE: order by average rating
   dbConn.query(`SELECT * FROM resources`, (error, data) => {
      error ? cb(error) : cb(null, data.rows);
   });
 },
 myReviews: (cb, username) => {
   let userReviewsJoin =`SELECT * FROM reviews INNER JOIN users ON reviews.user_id = users.user_id`;
   let reviewsResourcesJoin = `INNER JOIN resources ON reviews.resource_id = resources.resource_id`;
   dbConn.query(`${userReviewsJoin} ${reviewsResourcesJoin} WHERE username=($1) ORDER BY time_stamp DESC LIMIT 3`, [username], (error, data) => {
      error ? cb(error) : cb(null, data.rows);
   });
 }
};
