import Hapi from 'hapi'

const server = new Hapi.server({ port: 3000 }) 
// by default uses host

const start = async () => {
   await server.start()
}
// callbacks are gone — async / await promises only

server.route({
    method:'GET',
    path: '/name/{name}',
    handler: function (request) { // no reply
        return `Hello, ${request.params.name}` 
    }
})

start()