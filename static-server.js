var Hapi   = require('hapi');
var Inert  = require('inert'); // serve static content
var Path   = require('path');
var server = new Hapi.Server();
var port   = process.env.PORT || 8000;
server.register(Inert, function () {
  server.connection({ port: port });
  server.route( {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: { path: Path.normalize(__dirname + '/') }
    }
  });
  server.start(function() { console.log('Visit: http://127.0.0.1:' +port) });
}); // requires a callback function but can be blank
