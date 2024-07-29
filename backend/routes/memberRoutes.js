const express = require("express");
const router = express.Router();
const {
  getMembers,
  addMember,
  deleteMember,
} = require("../controllers/memberController");
const auth = require("../middleware/auth");

router.get("/", auth, getMembers);
router.post("/", auth, addMember);
router.delete("/:id", auth, deleteMember);

module.exports = router;
