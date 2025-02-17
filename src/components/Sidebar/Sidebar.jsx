import logo from "../../assets/logo.png"
import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      {/* Sidebar Top with Close Button */}
      <div className="sidebar-top">
        <img className="logo" src={logo} alt="logo" />
        {/* Show Close Button Only on Mobile */}
        {window.innerWidth <= 900 && (
          <button className="close-icon" onClick={() => setSidebarOpen(false)}>
            ✖
          </button>
        )}
      </div>

      {/* Sidebar Links */}
      <div className="sidebar-right">
        <a href="#">Dashboard</a>
        <a href="#">Profile</a>
        <a href="#">Products</a>
      </div>
    </div>
  );
};

export default Sidebar;
