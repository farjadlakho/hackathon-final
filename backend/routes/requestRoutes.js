const express = require('express');
const router = express.Router();
const { createRequest, getRequests } = require('../controllers/requestController');

router.route('/')
    .get(getRequests)
    .post(createRequest);

module.exports = router;

