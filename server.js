const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')
const port = process.env.PORT || 3000

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('/config/routes.js')
    .into(app)

app.db = db

app.listen(port, function(){
    console.log(`Server running at http://localhost:${port}/`)
})