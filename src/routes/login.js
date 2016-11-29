module.exports = [
{
  method: 'GET',
  path:'/',
  handler: (req, reply) => {
    reply.view('login');
  }
}
,{
  method: 'GET',
  path:'/login',
  handler:  (req, reply) => {
    reply.view('login');
  }
}
,{
  method: 'GET',
  path:'/register',
  handler:  (req, reply) => {
    reply.view('register');
  }
}];
