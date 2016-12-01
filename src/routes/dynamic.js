const getData = require('../getData.js');
const addReview = require('../addReview.js');

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
},
{
  method: 'GET',
  path:'/account/reviewform/',
  config: {
    auth: {
      strategy: 'base'
    },
      handler: (request,reply) => {
        let user = encodeURIComponent(request.auth.credentials.user);
        reply.view('add_review', { user });
      }
  }
},
{
  method: 'POST',
  path:'/account/addreview/',
  config: {
    auth: {
      strategy: 'base'
    },
      handler: (request,reply) => {
        let user = encodeURIComponent(request.auth.credentials.user);
        addReview((error) => {
          if(error) throw error;
        },request.payload, user, 'Learn to Program');
        reply().redirect('/account/');
      }
  }
}];
