const {data} = require('../models/dataSchema.js')

exports.createUser = (req,res)=>{
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
}


exports.getAll = (req,res)=>{
    data.find({}, (err,newInfo)=>{
        if(err){
            res.status(500).json({message: err})
        }else{
            res.status(200).json({message: "All Users found", data: newInfo})
        }
    }) 
}

exports.getUser = (req,res)=>{
    data.findById(req.params.id, (err,newInfo)=>{
        if(err){
            res.status(500).json({message: err})
        }else if(!newInfo){
            res.status(404).json({message: "Contact not found"})
        }
        else{
            res.status(200).json({message: "Found User",data: newInfo})
        }
    })
}

exports.updateUser =  (req,res)=>{
    data.findByIdAndUpdate(req.params.id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        country: req.body.country
    },(err, newInfo)=>{
        if(err){
            res.status(500).json({message: err})
        }else if(!newInfo){
            res.status(404).json({message: "Contact not found"})
        }
        else{
            newInfo.save((err, savedInfo)=>{
                if(err){
                    res.json({message: err})
                }
                else{
                    res.status(200).json({message: "Contact Updated", data: savedInfo})
                }
            })
        }
    })
}

exports.deleteUser =  (req,res)=>{
    data.findByIdAndDelete(req.params.id,(err,newInfo)=>{
        if(err){
            res.status(500).json({message: err})
        }else if(!newInfo){
            res.status(404).json({message: "Contact not found"})
        }
        else{
            res.status(200).json({message: "User deleted"})
        }
    })
}