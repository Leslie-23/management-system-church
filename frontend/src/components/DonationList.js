import React, { useState, useEffect } from "react";
import axios from "axios";

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const res = await axios.get("/api/donations");
      setDonations(res.data);
    };
    fetchDonations();
  }, []);

  return (
    <div className="donation-list">
      <h2>Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation._id}>
            {donation.donorName} - ${donation.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationList;
