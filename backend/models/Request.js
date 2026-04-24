const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: String, required: true },
    urgency: { type: String, default: 'Medium' },
    status: { type: String, default: 'Open' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', RequestSchema);

