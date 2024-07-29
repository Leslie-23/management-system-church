import React, { useState, useEffect } from "react";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("/api/events");
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="event-list">
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
