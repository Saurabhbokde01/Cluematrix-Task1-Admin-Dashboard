import { useState } from "react";
import down_arrow from "../../../assets/down-arrow.png";
import profile_icon from "../../../assets/profile_icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <p>Admin Dashboard</p>
      </div>
      <div className="navbar-right">
        <img src={profile_icon} alt="Profile" />
        <p>Admin</p>
        <img
          src={down_arrow}
          alt="Dropdown"
          className={`dropdown-arrow ${isOpen ? "rotate" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className={`dropdown-menu ${isOpen ? "active" : ""}`}>
          <button className="logout-button">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
