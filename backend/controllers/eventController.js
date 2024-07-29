const Event = require("../models/Event");

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.addEvent = async (req, res) => {
  const { title, description, date, location } = req.body;

  try {
    const newEvent = new Event({
      title,
      description,
      date,
      location,
    });

    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndRemove(req.params.id);
    res.json({ msg: "Event removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
