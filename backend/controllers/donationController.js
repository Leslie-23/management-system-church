const Donation = require("../models/Donation");

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.addDonation = async (req, res) => {
  const { amount, donorName, purpose } = req.body;

  try {
    const newDonation = new Donation({
      amount,
      donorName,
      purpose,
    });

    const donation = await newDonation.save();
    res.json(donation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteDonation = async (req, res) => {
  try {
    await Donation.findByIdAndRemove(req.params.id);
    res.json({ msg: "Donation removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
