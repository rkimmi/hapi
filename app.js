const Hapi = require('hapi')

const server = new Hapi.Server()
// like const app = express()

console.log(server)

server.connection({
    port: 3000,
    host: 'localhost'
})

server.start((err) => {
    if (err) {
        throw err
    }
   console.log(`Server started on: ${server.info.uri}`)
})