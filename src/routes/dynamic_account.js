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
          user: request.auth.credentials.user,
          resources: {},
          myReviews: {}
        }
        getData.recentReviews(request.auth.credentials.user,(error, reviewsData) => {
          if (error) console.log(error);
          userPageData.recentReviews = reviewsData;
          getData.resources((error, resourcesData) => {
            if (error) console.log(error);
            userPageData.resources = resourcesData;
            getData.myReviews( request.auth.credentials.user,(error, myReviewData) => {
              if (error) console.log(error);
              userPageData.myReviews = myReviewData;
              return reply.view('index', userPageData);
            });
          });
        });
      }
    }
}];
