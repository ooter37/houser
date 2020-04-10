const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(express.json())

const {CONNECTION_STRING, SERVER_PORT} = process.env
const {getHouses} = require('./controller')

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('database connected')
}).catch(err => console.log(err))

app.listen(SERVER_PORT, () => {
    console.log(`server listening on port ${SERVER_PORT}`)
})

app.get('/api/houses', getHouses)
// app.post('/api/house')
// app.delete('/api/house:id')