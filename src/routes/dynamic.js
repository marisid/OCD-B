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
          resources: {}
        }
        getData.recentReviews((error, data) => {
          if (error) throw error;
          userPageData.recentReviews = data;
        });
        getData.resources((error, data) => {
          if (error) throw error;
          userPageData.resources = data;
          reply.view('index', userPageData);
        });
      }
    }
}];
