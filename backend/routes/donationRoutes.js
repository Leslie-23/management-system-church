const express = require("express");
const router = express.Router();
const {
  getDonations,
  addDonation,
  deleteDonation,
} = require("../controllers/donationController");
const auth = require("../middleware/auth");

router.get("/", auth, getDonations);
router.post("/", auth, addDonation);
router.delete("/:id", auth, deleteDonation);

module.exports = router;
