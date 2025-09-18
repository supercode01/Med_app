// src/Components/Settings.jsx
import React, { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "",
    city: "",
    address: "",
    gender: "",
    dob: "",
    profileImage: "https://cdn-icons-png.flaticon.com/512/847/847969.png", // default sample image
    emailNotifications: true,
    pushNotifications: false,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage" && files.length > 0) {
      setFormData({
        ...formData,
        profileImage: URL.createObjectURL(files[0]),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Toggle switches
  const toggleSwitch = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSave = () => {
    console.log("Updated Data:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="p-4 border-b bg-white shadow-sm">
        <h2 className="text-lg font-semibold">Settings</h2>
        <p className="text-sm text-gray-500">
          Edit your information and fill in missing details
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 border max-w-2xl">
          {/* Profile Image */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border">
              <img
                src={formData.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <label className="cursor-pointer px-3 py-2 border rounded-md text-sm hover:bg-gray-100">
                Upload Image
                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-600">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                rows="3"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
          </div>

          {/* Notifications */}
          <div className="mt-8 space-y-4">
            <h3 className="text-md font-semibold text-gray-700">Notifications</h3>

            {/* Email Notifications */}
            <div className="flex items-center justify-between p-3 border rounded-md">
              <span className="text-sm text-gray-700">Email Notifications</span>
              <button
                onClick={() => toggleSwitch("emailNotifications")}
                className={`relative inline-flex items-center h-6 rounded-full w-14 transition ${
                  formData.emailNotifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`transform transition inline-block w-6 h-6 bg-white rounded-full ${
                    formData.emailNotifications ? "translate-x-8" : "translate-x-0"
                  }`}
                />
              </button>
              <span className="ml-2 text-xs text-gray-500">
                {formData.emailNotifications ? "Enabled" : "Disabled"}
              </span>
            </div>

            {/* Push Notifications */}
            <div className="flex items-center justify-between p-3 border rounded-md">
              <span className="text-sm text-gray-700">Push Notifications</span>
              <button
                onClick={() => toggleSwitch("pushNotifications")}
                className={`relative inline-flex items-center h-6 rounded-full w-14 transition ${
                  formData.pushNotifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`transform transition inline-block w-6 h-6 bg-white rounded-full ${
                    formData.pushNotifications ? "translate-x-8" : "translate-x-0"
                  }`}
                />
              </button>
              <span className="ml-2 text-xs text-gray-500">
                {formData.pushNotifications ? "Enabled" : "Disabled"}
              </span>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
