const Member = require("../models/Member");

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.addMember = async (req, res) => {
  const { name, email, phone, address } = req.body;

  try {
    const newMember = new Member({
      name,
      email,
      phone,
      address,
    });

    const member = await newMember.save();
    res.json(member);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteMember = async (req, res) => {
  try {
    await Member.findByIdAndRemove(req.params.id);
    res.json({ msg: "Member removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
