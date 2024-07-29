import React, { useState } from "react";
import Header from "./components/Header";
import MemberList from "./components/MemberList";
import EventList from "./components/EventList";
import DonationList from "./components/DonationList";
import Login from "./components/Login";
import "./styles.css";

const App = () => {
  const [token, setToken] = useState("");

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <Header />
      <MemberList />
      <EventList />
      <DonationList />
    </div>
  );
};

export default App;
