const Request = require('../models/Request');
const { analyzeUrgency } = require('../utils/aiHelper');

// @desc    Create new help request
exports.createRequest = async (req, res) => {
    try {
        const { title, description, user, category } = req.body;
        
        // AI Feature: Auto detect urgency
        const urgency = analyzeUrgency(description);

        const newRequest = new Request({
            title,
            description,
            user,
            category,
            urgency
        });

        const savedRequest = await newRequest.save();
        res.status(201).json(savedRequest);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};

// @desc    Get all requests
exports.getRequests = async (req, res) => {
    try {
        const requests = await Request.find().sort({ createdAt: -1 });
        res.json(requests);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};
