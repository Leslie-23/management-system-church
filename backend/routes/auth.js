// routes/auth.js
const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController"); // Ensure this path is correct

router.post("/login", login);

module.exports = router;
