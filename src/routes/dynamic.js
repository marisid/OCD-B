module.exports = [
  {
    method: 'GET',
    path:'/account/',
    handler: (request,reply) => {
      let user = encodeURIComponent(request.query.user);
      reply.view('index', {user});
      }
  },
];
