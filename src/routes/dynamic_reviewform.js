module.exports = [{
  method: 'GET',
  path:'/account/reviewform/',
  config: {
    auth: {
      strategy: 'base'
    },
      handler: (request,reply) => {
        let userPageData = {
          user: request.auth.credentials.user,
          resource: request.query.resource
        }
        return reply.view('add_review', userPageData);
      }
  }
}];
