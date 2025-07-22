import React, { useState } from "react";
import { IoClose, IoChevronDown } from "react-icons/io5";
import { MdPeople, MdLocalHospital, MdLocationCity } from "react-icons/md";
import { MdPhone, MdPsychology, MdMedicalServices } from "react-icons/md"; 

const cities = ["Jaipur", "Jamwa-ramgarh", "Dausa", "Tonk"];
const diseases = ["Hernia", "Gallstones", "Appendicitis"];

const AppointmentModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    disease: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!/^\d{10}$/.test(formData.phone)) errs.phone = "Enter valid 10-digit number";
    if (!formData.city) errs.city = "Please select a city";
    if (!formData.disease) errs.disease = "Please select a disease";
    return errs;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Optionally send data to server here
      onClose(); // Close modal
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white-100 bg-opacity-40">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-fit relative">
        {/* Header */}
        <div className="bg-blue-600 text-white text-center py-3 text-lg font-semibold rounded-t-xl">
          Book Your FREE Consultation Now
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl bg-blue-600 rounded-full p-1 hover:bg-blue-700 transition"
        >
          <IoClose />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
          {/* Left Section */}
          <div className="space-y-5 border-r pr-4">
            <div>
              <h2 className="font-bold text-lg">Simplifying Surgery Experience</h2>
              <p className="text-gray-600">
                Consult with our expert surgeon for more than{" "}
                <span className="text-blue-600 font-medium">50+ diseases</span>
              </p>
            </div>

            <div>
  <h3 className="font-semibold mb-2">Next Steps</h3>
  <ul className="text-gray-600 space-y-6 text-sm">
    <li className="flex items-start gap-4">
      <MdPhone className="text-xl" />
      <span>Once you share your details, our care coordinator will call you.</span>
    </li>
    <li className="flex items-start gap-4">
      <MdPsychology className="text-xl" />
      <span>They’ll understand your symptoms and condition in detail.</span>
    </li>
    <li className="flex items-start gap-4">
      <MdMedicalServices className="text-xl" />
      <span>Your consultation will be scheduled promptly.</span>
    </li>
  </ul>
</div>

            {/* Stats with Icons */}
            <div className="grid grid-cols-3 gap-3 mt-4 bg-gray-100 p-4 rounded-lg text-center text-sm font-medium">
              <div className="flex flex-col items-center">
                <MdPeople className="text-2xl text-blue-600" />
                <span className="font-bold text-lg">3M+</span>
                <span>Patients</span>
              </div>
              <div className="flex flex-col items-center">
                <MdLocalHospital className="text-2xl text-blue-600" />
                <span className="font-bold text-lg">150+</span>
                <span>Clinics</span>
              </div>
              <div className="flex flex-col items-center">
                <MdLocationCity className="text-2xl text-blue-600" />
                <span className="font-bold text-lg">30+</span>
                <span>Cities</span>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Patient Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-500" : "focus:ring-blue-300"
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter 10 Digit Mobile Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.phone ? "border-red-500" : "focus:ring-blue-300"
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* City Dropdown */}
            <div className="relative">
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className={`w-full appearance-none px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 ${
                  errors.city ? "border-red-500" : "focus:ring-blue-300"
                }`}
              >
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <IoChevronDown className="absolute top-3 right-3 text-gray-500 pointer-events-none" />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>

            {/* Disease Dropdown */}
            <div className="relative">
              <select
                value={formData.disease}
                onChange={(e) => setFormData({ ...formData, disease: e.target.value })}
                className={`w-full appearance-none px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 ${
                  errors.disease ? "border-red-500" : "focus:ring-blue-300"
                }`}
              >
                <option value="">Select Disease</option>
                {diseases.map((disease, index) => (
                  <option key={index} value={disease}>
                    {disease}
                  </option>
                ))}
              </select>
              <IoChevronDown className="absolute top-3 right-3 text-gray-500 pointer-events-none" />
              {errors.disease && <p className="text-red-500 text-sm mt-1">{errors.disease}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center pt-2">
              <span className="text-green-600 font-medium">Free Consultation</span>
              <button
                onClick={handleSubmit}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition"
              >
                Book Free Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
