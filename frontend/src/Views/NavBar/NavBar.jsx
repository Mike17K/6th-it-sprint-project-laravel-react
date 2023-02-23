import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/uploadData">Upload new Event Data</Link>
      <Link to="/eventSelectionPage">Evaluate the Events</Link>
    </div>
  );
};

export default NavBar;
