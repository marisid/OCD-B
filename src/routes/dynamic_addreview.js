const addReview = require('../addReview.js');

module.exports = [{
  method: 'POST',
  path:'/account/addreview/',
  config: {
    auth: {
      strategy: 'base'
    },
    handler: (request,reply) => {
      let user = request.auth.credentials.use;
      addReview(request.payload, user, request.payload.resource_title,(error) => {
        if(error) throw error;
        return reply.redirect('/account/');
      });
    }
  }
}];
