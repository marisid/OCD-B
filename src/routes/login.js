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
      // req.cookieAuth.clear(); add logout btn to replace this line
      validateUser(req.payload,(err,validated)=>{
        if(err){
          console.log("User validation error: ", err);
        }
        if(!validated){
          return reply.redirect('/login');
        } else {
          req.cookieAuth.set(req.payload);
          return reply.redirect('/account/')
        }
      });
    }
}
];
