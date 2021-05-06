const express = require('express')
require('dotenv').config()
const {PORT} = process.env
const {connectDB} = require('./db/dbConnect.js')
const {data} = require('./models/dataSchema.js')
const crudRoutes = require('./routes/crudRouters.js')

// Initialise app
const app = express()

// Connect to Database
connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Using Routers
app.use(crudRoutes)

// Running Server
const port = PORT || 5000
app.listen(port, ()=>{
    console.log("Server is running")
})