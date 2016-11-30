module.exports = [
  {
    method: 'GET',
    path:'/account/',
    config: {
      auth: {
        strategy: 'base'
      },
      handler: (request,reply) => {
        let user = encodeURIComponent(request.auth.credentials.user);
        reply.view('index', {user})
        }
    }
  }
];
