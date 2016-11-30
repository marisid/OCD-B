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
        console.log(req.payload);
        if(err) {
          console.log(err);
        }
      },req.payload)
      reply().redirect('/login');
    }
  }
    ];
