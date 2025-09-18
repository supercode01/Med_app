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
        return <Settings />;
      case "HelpSupport":
        return <HelpSupport />;
      case "ForProfessionals":
        return <ForProfessionals />;
      case "ForPatients":
        return <ForPatients />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-gray-100 grid grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
      
      <div className="row-span-2">
        <LeftSidebar onPageChange={setActivePage} />
      </div>

      <div className="col-start-2"> 
        <Header />
      </div>

      <div className="col-start-2 overflow-auto">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;