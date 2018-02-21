import Hapi from 'hapi'

const server = new Hapi.server({ port: 3000 }) 
// by default uses host

// server.connection({
//     port: 3000,
//     host: 'localhost'
// })

const start = async () => {
   await server.start()
}
// callbacks are gone — async / await promises only

// server.start((err) => {
//     if (err ) {
//         throw err
//     }
//     console.log(`Server started at: ${server.info.url}`)
// })

server.route({
    method:'GET',
    path: '/name/{name}',
    handler: function (request) { // no reply
        return `Hello, ${request.params.name}` // return only
    }
})

start()
