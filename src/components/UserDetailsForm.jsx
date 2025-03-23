import React, { useState } from "react";
import { FaUser, FaPhone, FaHome, FaCalendar } from "react-icons/fa";

const UserDetailsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value === "")) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit(formData); // Pass user details to the parent component
  };
  const handleUserDetailsSubmit = (data) => {
    console.log("User Details Submitted:", data); // Debugging
    setUserDetails(data); // Save user details
    setCurrentStep("prediction"); // Move to the prediction step
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">User Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { id: "name", label: "Name", icon: <FaUser />, type: "text" },
            { id: "phone", label: "Phone Number", icon: <FaPhone />, type: "tel" },
            { id: "address", label: "Address", icon: <FaHome />, type: "text" },
            { id: "date", label: "Date", icon: <FaCalendar />, type: "date" },
          ].map(({ id, label, icon, type }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {icon}
                </div>
                <input
                  type={type}
                  name={id}
                  id={id}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder={`Your ${label.toLowerCase()}`}
                  value={formData[id]}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;