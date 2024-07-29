import React, { useState, useEffect } from "react";
import axios from "axios";

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await axios.get("/api/members");
      setMembers(res.data);
    };
    fetchMembers();
  }, []);

  return (
    <div className="member-list">
      <h2>Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member._id}>
            {member.name} - {member.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
