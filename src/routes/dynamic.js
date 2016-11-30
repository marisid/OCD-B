const getData = require('../getData.js');

module.exports = [{
  method: 'GET',
  path:'/account/',
  handler: (request,reply) => {
    let userPageData = {
      recentReviews: {},
      user: encodeURIComponent(request.query.user)
    }
    getData.recentReviews((error, data) => {
      if (error) throw error;
      userPageData.recentReviews = data;
      reply.view('index', userPageData);
    });
  }
}];
