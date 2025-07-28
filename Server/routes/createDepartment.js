const express = require('express')
const router = express.Router()
const DepartmentMoldel = require('../models/Department')

router.post('/create', async (req, res) => {
    console.log(req.body)
    const { dName, dId, maneger, description } = req.body

    try {
        const department = await DepartmentMoldel.create({
            dName, dId, maneger, description
        })
        res.status(201).json({massage:'department created', department})
    }catch(err){
        console.error("Error creating user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
    }
})

router.get('/all', async (req, res) => {
    try {
          const department = await DepartmentMoldel.find()
          res.status(201).json(department)
    }catch(err){
        console.error("Error ", err);
    res.status(500).json({ message: "Server error", error: err.message });
    }
})

module.exports = router; 
