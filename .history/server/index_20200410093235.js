const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())

const {CONNECTION_STRING, SERVER_PORT} = process.env