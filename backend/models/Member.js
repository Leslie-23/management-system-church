const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Member", MemberSchema);
