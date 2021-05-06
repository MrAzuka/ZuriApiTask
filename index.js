const express = require('express')
require('dotenv').config()
const {PORT} = process.env
const {connectDB} = require('./db/dbConnect.js')
const {data} = require('./models/dataSchema.js')
// Initialise app
const app = express()

// Connect to Database
connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.post('/info', (req,res)=>{
    data.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        country: req.body.country
    }, (err, newInfo)=>{
        if (err){
            res.status(500).json({message: err})
        }else{
            res.status(200).json({message: "New user successfully added", data: newInfo})
        }
    })
})

app.get('/info', (req,res)=>{
    data.find({}, (err,newInfo)=>{
        if(err){
            res.status(500).json({message: err})
        }else{
            res.status(200).json({message: "All Users found", data: newInfo})
        }
    })
})

app.get('/info/:id', (req,res)=>{
    data.findById(req.params.id, (err,newInfo)=>{
        if(err){
            res.status(500).json({message: err})
        }else if(!newInfo){
            res.status(404).json({message: "Contact not"})
        }
        else{
            res.status(200).json({message: "Found User",data: newInfo})
        }
    })
})

app.put('/info/:id', (req,res)=>{
    data.findByIdAndUpdate(req.params.id, (err,newInfo)=>{

    })
})

const port = PORT || 5000

app.listen(port, ()=>{
    console.log("Server is running")
})