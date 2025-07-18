const express = require('express')
const router = express.Router()
const userModel = require('../models/User')

router.get('/:departmentName', async (req, res) => {
    console.log(req.params.departmentName)
    const department = req.params.departmentName
    try {
          const employee = await userModel.find({"jobDetails.department": department })
          console.log(employee)
          res.status(201).json(employee)
    }catch(err){
        console.error("Error ", err);
    res.status(500).json({ message: "Server error", error: err.message });
    }
})

module.exports = router; 
