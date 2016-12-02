const addReview = require('../addReview.js');

module.exports = [{
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
        return reply.redirect('/account/');
      },request.payload, user, request.payload.resource_title);
    }
  }
}];
