// src/App.js
import React, { useState } from "react";
import LeftSidebar from "./Components/leftsidebar";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import AIChatbot from "./Components/AIChatbot";
import HelpSupport from "./Components/HelpSupport";
import Settings from "./Components/Settings";
import ForProfessionals from "./Components/ForProfessionals";
import ForPatients from "./Components/ForPatients";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "AIChatbot":
        return <AIChatbot />;
      case "Settings":
        return <Settings /> ;
      case "HelpSupport":
        return <HelpSupport />;
      case "ForProfessionals": // ✅ handle professionals page
        return <ForProfessionals />;
      case "ForPatients":
        return <ForPatients />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <LeftSidebar onPageChange={setActivePage} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
