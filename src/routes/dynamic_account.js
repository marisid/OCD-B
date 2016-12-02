const getData = require('../getData.js');

module.exports = [{
  method: 'GET',
  path:'/account/',
  config: {
    auth: {
      strategy: 'base'
    },
      handler: (request,reply) => {
        let userPageData = {
          recentReviews: {},
          user: encodeURIComponent(request.auth.credentials.user),
          resources: {},
          myReviews: {}
        }
        getData.recentReviews((error, data) => {
          if (error) throw error;
          userPageData.recentReviews = data;
        },request.auth.credentials.user);
        getData.resources((error, data) => {
          if (error) throw error;
          userPageData.resources = data;
        });
        getData.myReviews((error, data) => {
          if (error) throw error;
          userPageData.myReviews = data;
          return reply.view('index', userPageData);
        }, request.auth.credentials.user);
      }
    }
}];
