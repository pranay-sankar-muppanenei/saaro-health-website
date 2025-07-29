import React, { useState } from "react";

const AppointmentForm = ({ topCities = [], onSubmit }) => {
  const [selectedCity, setSelectedCity] = useState("Jaipur");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullData = { ...formData, city: selectedCity };
    if (onSubmit) onSubmit(fullData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px] bg-white flex flex-col items-center rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-xl text-center font-semibold text-gray-900 mb-4">
        Book a Free Appointment
      </h3>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Patient Name"
        className="w-full mb-3 px-4 h-[51px] bg-[#EFEFEF] placeholder-black py-2 border border-[#E4E4E4] rounded-md text-sm"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Mobile Number"
        className="w-full mb-3 px-4 py-2 h-[51px] bg-[#EFEFEF] placeholder-black border border-[#E4E4E4] rounded-md text-sm"
      />
      <input
        type="text"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        placeholder="Select your city"
        className="w-full mb-3 px-4 py-2 h-[51px] bg-[#EFEFEF] placeholder-black border border-[#E4E4E4] rounded-md text-sm"
      />

      <div className="mb-3">
        <p className="text-sm font-medium mb-2">Top Cities</p>
        <div className="flex flex-wrap gap-2">
          {topCities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setSelectedCity(city)}
              className={`px-3 py-1 h-[31px] w-[103px] rounded-[5px] text-sm border transition-all ${
                selectedCity === city
                  ? "bg-[#8F6CB4] text-white border-purple-600"
                  : "text-gray-600 border-[#8F6CB4] bg-transparent"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      <input
        type="text"
        name="treatment"
        value={formData.treatment}
        onChange={handleChange}
        placeholder="Select symptoms/disease/treatment"
        className="w-full mb-4 px-4 py-2 h-[51px] bg-[#EFEFEF] border border-[#E4E4E4] rounded-md text-sm"
      />

      <button
        type="submit"
        className="bg-[#8F6CB4] text-white py-2 rounded-full px-4 font-medium"
      >
        Book a free appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
