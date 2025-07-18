const express = require('express')
const router = express.Router()
const userModel = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const screat = "kdwhvgSJDVUYWVUBQEBVHQRWVBWRB";

router.post('/login', async (req, res) => {
    console.log(req.body)
    const { password, employeeId } = req.body

    const user = await userModel.findOne({ employeeId })
    console.log(user.role)

    if (!user) { return res.status(404).json({ massage: 'invalid cradentials' }) }
    if(user.password === password){
        console.log(user)
        return res.status(201).json({ massage: "success" }, user)
    }
    // try {
    //     // bcryptjs.compare(password, user.password, (err, result) => {
    //     //     if (!result) { res.status(404).json({ massage: 'invalid cradentials' }) }
    //         res.status(201).json({ massage: "success" }, user)
    //     })
    //     const token = jwt.sign({ employeeId }, screat)
    //     res.cookie('token', token)
    // } catch (err) {
    //     console.error("Error creating user:", err);
    //     res.status(500).json({ message: "Server error", error: err.message });
    // }
})

module.exports = router