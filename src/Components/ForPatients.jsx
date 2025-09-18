// src/Components/ForPatients.jsx
import React from "react";
import { Calendar, FileText, Activity, Bell, MessageCircle, AlertTriangle } from "lucide-react";

const ForPatients = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="p-4 border-b bg-white shadow-sm">
        <h2 className="text-lg font-semibold">For Patients</h2>
        <p className="text-sm text-gray-500">
          Manage your health records, appointments, and reminders
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Health Records */}
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col">
            <div className="flex items-center mb-4">
              <FileText className="text-blue-600 mr-2" size={20} />
              <h3 className="text-md font-semibold">Health Records</h3>
            </div>
            <p className="text-sm text-gray-600 flex-1">
              View your medical history, prescriptions, and lab reports in one secure place.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 self-start">
              View Records
            </button>
          </div>

          {/* Appointments */}
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col">
            <div className="flex items-center mb-4">
              <Calendar className="text-green-600 mr-2" size={20} />
              <h3 className="text-md font-semibold">Appointments</h3>
            </div>
            <p className="text-sm text-gray-600 flex-1">
              Book, reschedule, or check details of your upcoming doctor visits.
            </p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 self-start">
              Manage Appointments
            </button>
          </div>

          {/* Prescriptions & Health Dashboard */}
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col">
            <div className="flex items-center mb-4">
              <Activity className="text-purple-600 mr-2" size={20} />
              <h3 className="text-md font-semibold">Health Dashboard</h3>
            </div>
            <p className="text-sm text-gray-600 flex-1">
              Track your vitals like blood pressure, sugar level, and weight with simple charts.
            </p>
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 self-start">
              View Dashboard
            </button>
          </div>

          {/* Reminders & Notifications */}
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col">
            <div className="flex items-center mb-4">
              <Bell className="text-yellow-600 mr-2" size={20} />
              <h3 className="text-md font-semibold">Reminders & Notifications</h3>
            </div>
            <p className="text-sm text-gray-600 flex-1">
              Stay updated with medicine reminders, appointment alerts, and health tips.
            </p>
            <button className="mt-4 px-4 py-2 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700 self-start">
              Manage Notifications
            </button>
          </div>

          {/* Doctor Communication */}
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col">
            <div className="flex items-center mb-4">
              <MessageCircle className="text-pink-600 mr-2" size={20} />
              <h3 className="text-md font-semibold">Doctor Communication</h3>
            </div>
            <p className="text-sm text-gray-600 flex-1">
              Chat with your doctor or use the AI chatbot for quick health assistance.
            </p>
            <button className="mt-4 px-4 py-2 bg-pink-600 text-white text-sm rounded-md hover:bg-pink-700 self-start">
              Start Chat
            </button>
          </div>

          {/* Emergency Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-600 mr-2" size={20} />
              <h3 className="text-md font-semibold">Emergency</h3>
            </div>
            <p className="text-sm text-gray-600 flex-1">
              Quickly contact emergency services or share your live location with doctors.
            </p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 self-start">
              Emergency Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForPatients;
