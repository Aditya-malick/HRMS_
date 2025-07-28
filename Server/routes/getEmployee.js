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

router.get('/id/:Id', async (req, res) => {
    try {
        const employee = await userModel.findOne({ employeeId: req.params.Id });

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(employee);
    } catch (err) {
        console.error("Error fetching by ID:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});
module.exports = router; 
