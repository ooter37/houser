const express = require('express')
require('dotenv').config()
const massive = require('massive')

const app = express()
app.use(express.json())

const {CONNECTION_STRING, SERVER_PORT} = process.env

app.listen(SERVER_PORT, () => {
    console.log(`server listening on port ${SERVER_PORT}`)
})

massive({
    
})