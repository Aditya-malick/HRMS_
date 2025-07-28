const express = require('express');
const router = express.Router();
const Leave = require('../models/Leave');

// POST /api/leave/apply
router.post('/apply', async (req, res) => {
  try {
    const { employeeId, department,title,  reason } = req.body;

    if (!employeeId || !department || !title || !reason) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newLeave = new Leave({
      employeeId,
      department,
      date: Date.now(),
      title,
      reason,
      status: 'Active', // Default when applying
    });

    await newLeave.save();
    res.status(201).json({ message: 'Leave request submitted successfully', leave: newLeave });

  } catch (error) {
    console.error("Error adding leave:", error);
    res.status(500).json({ message: "Server error while submitting leave" });
  }
});


router.get('/employee/:employeeId', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const leaves = await Leave.find({ employeeId }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: leaves.length,
      data: leaves,
    });
  } catch (err) {
    console.error('Error fetching employee leaves:', err.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.get("/manager/:department", async (req, res) => {
  try {
    const { department } = req.params;

    const leaves = await Leave.find({ department }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: leaves.length,
      data: leaves,
    });
  } catch (error) {
    console.error("Error fetching department leaves:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// PUT update leave status by ID
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Optional: Validate status
    const validStatuses = ["Active", "Pending", "Rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value.",
      });
    }

    const updatedLeave = await Leave.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedLeave) {
      return res.status(404).json({
        success: false,
        message: "Leave application not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Leave status updated successfully.",
      data: updatedLeave,
    });
  } catch (error) {
    console.error("Error updating leave status:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});



module.exports = router;
