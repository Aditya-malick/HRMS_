const express = require('express')
const router = express.Router()
const AnnouncementsModle = require('../models/Announcements')

router.post('/create', async (req, res) => {
    console.log(req.body);
    const { title, massage, targate } = req.body;

    try {
        const data = await AnnouncementsModle.create({ title, massage, targate });
        console.log(data);
        res.status(201).json({ message: "Created", data });
    } catch (err) {
        console.error(" Error creating announcement:", err);
        res.status(500).json({ message: "Not able to create", err });
    }
});


router.get('/:role', async (req, res) => {
    const userRole = req.params.role
    console.log(req.params.role)
    let filter = {}

    if (userRole === 'HR') {
        filter = {}
    } else if (userRole === 'Employee') {
        filter = { targate: { $in: ['Employee', 'All'] } }

    } else if (userRole === 'Manager') {
        filter = { targate: { $in: ['Manager', 'All'] } }
    }

    try {
        const result = await AnnouncementsModle.find(filter)
        res.status(201).json({ massage: "getting data", result })
    } catch (err) {
        res.status(500).json({ massage: "data not found", err })
    }
})

module.exports = router