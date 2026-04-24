const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Request' },
    sender: String,
    text: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);
