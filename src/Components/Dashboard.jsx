// src/Components/Dashboard.jsx
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaSearch, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const [medicines, setMedicines] = useState([]);
  const [inputMedicine, setInputMedicine] = useState("");
  const [interactionResult, setInteractionResult] = useState("");
  const [drug1, setDrug1] = useState("");
  const [drug2, setDrug2] = useState("");

  // Add medicine manually
  const handleAddMedicine = () => {
    if (inputMedicine.trim() !== "") {
      const newMedicine = {
        id: Date.now(),
        name: inputMedicine,
        description: "Short description about this medicine.",
      };
      setMedicines([...medicines, newMedicine]);
      setInputMedicine("");
    }
  };

  // Delete medicine
  const handleDeleteMedicine = (id) => {
    setMedicines(medicines.filter((med) => med.id !== id));
  };

  // Simulate prescription upload & scanning
  const handleUploadPrescription = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Fake scanned medicines
      const scannedMedicines = [
        {
          id: Date.now() + 1,
          name: "Paracetamol",
          description: "Used to treat mild pain and fever.",
        },
        {
          id: Date.now() + 2,
          name: "Amoxicillin",
          description: "Antibiotic for bacterial infections.",
        },
      ];
      setMedicines([...medicines, ...scannedMedicines]);
      alert("Prescription scanned successfully! Medicines added.");
    }
  };

  // Drug interaction check (dummy logic)
  const handleCheckInteraction = () => {
    if (drug1 && drug2) {
      if (
        (drug1.toLowerCase() === "paracetamol" &&
          drug2.toLowerCase() === "ibuprofen") ||
        (drug2.toLowerCase() === "paracetamol" &&
          drug1.toLowerCase() === "ibuprofen")
      ) {
        setInteractionResult("⚠️ Interaction Found: May increase risk of side effects.");
      } else {
        setInteractionResult("✅ No harmful interaction detected.");
      }
    } else {
      setInteractionResult("Please enter two medicines to check.");
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 h-full overflow-y-auto">
      {/* Patient Information */}
      <div className="bg-white rounded-lg shadow-sm p-6 border">
        <h2 className="text-lg font-semibold mb-4">Patient Information</h2>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-800">John Doe</p>
            <p className="text-sm text-gray-500">john.doe@example.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Member ID</p>
            <p className="font-medium text-gray-800">VD-2024-001234</p>
          </div>
        </div>
      </div>

      {/* Medication Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 border">
        <h2 className="text-lg font-semibold mb-2">Medication List</h2>
        <p className="text-sm text-gray-500 mb-4">
          Manage your medications and check for interactions
        </p>

        {/* Add Medicine */}
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={inputMedicine}
            onChange={(e) => setInputMedicine(e.target.value)}
            placeholder="Enter medicine name..."
            className="flex-1 px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleAddMedicine}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add
          </button>

          {/* Upload Prescription */}
          <label className="px-4 py-2 border rounded-md hover:bg-gray-100 cursor-pointer">
            Upload Prescription
            <input
              type="file"
              accept="image/*"
              onChange={handleUploadPrescription}
              className="hidden"
            />
          </label>

          {/* Quick Check */}
          <button
            onClick={() =>
              document.getElementById("interaction-modal").showModal()
            }
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Quick Check
          </button>
        </div>

        {/* Show Medicines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {medicines.map((med) => (
            <div
              key={med.id}
              className="p-4 border rounded-md shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-medium text-gray-800">{med.name}</p>
                <p className="text-sm text-gray-500">{med.description}</p>
                <button className="text-blue-600 text-sm hover:underline">
                  View Details
                </button>
              </div>
              <button
                onClick={() => handleDeleteMedicine(med.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Total Medicines: <span className="font-medium">{medicines.length}</span>
        </p>
      </div>

      {/* Quick Check Modal */}
<dialog
  id="interaction-modal"
  className="rounded-2xl p-6 w-full max-w-lg border shadow-xl bg-white"
>
  <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
    Drug Interaction Checker
  </h3>

  {/* Input Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <input
      type="text"
      placeholder="Drug A"
      value={drug1}
      onChange={(e) => setDrug1(e.target.value)}
      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
    <input
      type="text"
      placeholder="Drug B"
      value={drug2}
      onChange={(e) => setDrug2(e.target.value)}
      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  {/* Buttons */}
  <div className="space-y-3">
    <button
      onClick={handleCheckInteraction}
      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      <FaSearch className="text-lg" />
      Check Interaction
    </button>
    <form method="dialog">
      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border rounded-lg hover:bg-gray-100 transition">
        <FaTimes className="text-lg" />
        Close
      </button>
    </form>
  </div>

  {/* Result */}
  {interactionResult && (
    <div className="mt-6 text-center">
      <p
        className={`text-sm font-medium ${
          interactionResult.includes("⚠️")
            ? "text-red-600"
            : "text-green-600"
        }`}
      >
        {interactionResult}
      </p>
    </div>
  )}
</dialog>
    </div>
  );
};

export default Dashboard;
