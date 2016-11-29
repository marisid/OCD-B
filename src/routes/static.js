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
      method: 'GET',
      path:'/register/{file*}',
      handler: {
        directory: {
          path: 'public/',
          index: 'register.html'
        }
      }
  }];
