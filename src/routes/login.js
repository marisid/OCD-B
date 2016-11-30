const validateUser = require('../validateUser')
module.exports = [
  {
    method: 'GET',
    path:'/{file*}',
    handler: {
      directory: {
        path: 'public/',
        index: 'login.html'
      }
    }
  },
  {
    method: 'GET',
    path:'/login/{file*}',
    handler: {
      directory: {
        path: 'public/',
        index: 'login.html'
      }
    }
  },
  {
    method: 'POST',
    path:'/login',
    handler: (req,reply) => {
      validateUser((err,validated)=>{
        if(err){
          throw err;
        }
        if(!validated){
          reply().redirect('/login');
        } else {
          reply.view('index');
        }
      },req.payload);
    }
  }
];
