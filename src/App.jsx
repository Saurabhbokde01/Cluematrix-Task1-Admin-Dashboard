import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Dashboard/Navbar/Navbar"; // Import Navbar
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 900);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      setSidebarOpen(window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      {/* Navbar (Fixed at the top) */}
      <Navbar />

      {/* Show Menu Icon Only When Sidebar is Closed */}
      {isMobile && !sidebarOpen && (
        <button className="menu-icon" onClick={() => setSidebarOpen(true)}>
          ☰
        </button>
      )}

      {/* Sidebar Component */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Dashboard Component */}
      <Dashboard />
    </div>
  );
};

export default App;
