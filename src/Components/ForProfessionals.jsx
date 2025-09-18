// src/Components/ForProfessionals.jsx
import React, { useState } from "react";
import { Calendar, FileText, MessageSquare, User, BarChart3, Bell } from "lucide-react";

const ForProfessionals = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Doctor Profile</h3>
            <p className="text-gray-600">Manage your personal and professional details.</p>
          </div>
        );
      case "appointments":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Appointments</h3>
            <p className="text-gray-600">View and manage patient appointments here.</p>
          </div>
        );
      case "chat":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Consultations</h3>
            <p className="text-gray-600">Access patient chats and consultation history.</p>
          </div>
        );
      case "records":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Patient Records</h3>
            <p className="text-gray-600">View medical history and uploaded reports securely.</p>
          </div>
        );
      case "analytics":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Analytics</h3>
            <p className="text-gray-600">Track patients consulted, revenue, and feedback.</p>
          </div>
        );
      case "notifications":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <p className="text-gray-600">Stay updated with patient reminders and alerts.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="p-4 border-b bg-white shadow-sm">
        <h2 className="text-lg font-semibold">For Professionals</h2>
        <p className="text-sm text-gray-500">
          Tools and features designed for doctors and medical experts
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 p-4 border-b bg-white overflow-x-auto">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm ${
            activeTab === "profile" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <User size={16} />
          <span>Profile</span>
        </button>
        <button
          onClick={() => setActiveTab("appointments")}
          className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm ${
            activeTab === "appointments" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <Calendar size={16} />
          <span>Appointments</span>
        </button>
        <button
          onClick={() => setActiveTab("chat")}
          className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm ${
            activeTab === "chat" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <MessageSquare size={16} />
          <span>Consultations</span>
        </button>
        <button
          onClick={() => setActiveTab("records")}
          className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm ${
            activeTab === "records" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <FileText size={16} />
          <span>Records</span>
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm ${
            activeTab === "analytics" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <BarChart3 size={16} />
          <span>Analytics</span>
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm ${
            activeTab === "notifications" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <Bell size={16} />
          <span>Notifications</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default ForProfessionals;
