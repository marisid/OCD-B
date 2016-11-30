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
      addUser((err) => {
        if(err) {
          throw(err);
        }
      },req.payload)
      reply().redirect('/login');
    }
  }
    ];
