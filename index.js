const Hapi = require('hapi')

// init server
const server = new Hapi.Server()
 
// connection
server.connection({
    port: 3000,
    host: 'localhost'
})

// home
server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {  // req and res!
        reply('Hello Hapi World')
    }
})

// dynamic route
server.route({
    method: 'GET',
    path: '/user/{name}',
    handler: (request, reply) => {  // req and res!
        reply('Hello, ' + request.params.name)
    }
})


server.start((err) => {
    if (err){
        throw err
    }
    console.log(`Servers started at: ${server.info.url}`)
})