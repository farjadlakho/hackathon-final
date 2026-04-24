const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// =======================
// USER MODEL
// =======================
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String
});

const User = mongoose.model('User', userSchema);

// =======================
// SIGNUP
// =======================
router.post('/signup', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      role
    });

    await user.save();

    res.json({ message: "Signup successful" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// =======================
// LOGIN
// =======================
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;