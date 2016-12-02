const addUser = require('../addUser')

module.exports = [
  {
    method: 'GET',
    path:'/register/{file*}',
    handler: {
      directory: {
        path: 'public/',
        index: 'register.html'
      }
    }
  }
 ,{
    method: 'POST',
    path: '/register',
    handler: (req, reply) => {
      addUser(req.payload, (err) => {
        if(err) {
          console.log("Add user error: ",err);
        }
        return reply.redirect('/login');
      })
    }
  }
];
