//importation du module http
const http = require('http')
const app = require("./app")
const dotenv = require('dotenv')

//configuration de app et dotenv
dotenv.config()
app.set(process.env.PORT || 3001)

const server = http.createServer(app)

server.listen(process.env.PORT,()=>console.log('Server en marche'))