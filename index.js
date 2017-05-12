'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 1729, host: '127.0.0.1' });

server.start(( err ) => {
	if ( err ) {
		throw err;
	}

	console.log(`Server running @: ${server.info.uri}`);
});

server.route({
	method: 'GET',
	path: '/',
	handler: (reqest, reply) => {
		reply('  |||>>> Hello');
	}
});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: (request, reply) => {
		reply('   |||>> Hello, ' + encodeURIComponent(request.params.name) + '!');
	}
});
