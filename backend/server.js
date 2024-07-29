const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes.js");
const memberRoutes = require("./routes/memberRoutes.js");
const eventRoutes = require("./routes/eventRoutes.js");
const donationRoutes = require("./routes/donationRoutes.js");
const authRoutes2 = require("./routes/auth");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define routes
// app.use("/api/auth", authRoutes);
app.use("/api/auth", authRoutes2);
app.use("/api/members", memberRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/donations", donationRoutes);

// Serve static files (for production)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
