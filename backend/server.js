require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// =======================
// MIDDLEWARES
// =======================
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// =======================
// ROUTES IMPORT
// =======================
const authRoutes = require('./routes/auth');

// =======================
// USE ROUTES
// =======================
app.use('/api/auth', authRoutes);

// =======================
// TEST ROUTE
// =======================
app.get('/', (req, res) => {
  res.send("🚀 Backend is live!");
});

// =======================
// DATABASE + SERVER
// =======================
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");

    app.listen(8000, () => {
      console.log("🚀 Server running on http://127.0.0.1:8000");
    });
  })
  .catch(err => {
    console.log("❌ DB Error:", err);
  });