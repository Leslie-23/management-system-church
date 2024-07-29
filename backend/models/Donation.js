const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  donorName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  purpose: {
    type: String,
  },
});

module.exports = mongoose.model("Donation", DonationSchema);
