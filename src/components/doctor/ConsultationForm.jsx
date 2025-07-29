import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const cities = ["Jaipur", "Mumbai", "Bangalore", "Delhi"];

const ConsultationForm = ({ doctorName }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    topCity: "Jaipur",
    issue: "",
  });

  return (
    <div className="bg-[#F7F2FC] rounded-xl p-6 shadow-md">
      <h3 className="text-lg text-[#815AAC] font-semibold text-center mb-4">
        Consult {doctorName}
      </h3>

      <div className="space-y-4 text-sm">
        <input
          type="text"
          placeholder="Patient Name"
          className="w-full px-3 py-2 border border-[#8F6CB4] h-[51px] bg-white rounded-md"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full px-3 py-2 border border-[#8F6CB4] h-[51px] bg-white rounded-md"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        {/* City Dropdown with custom arrow */}
        <div className="relative">
          <select
            className="w-full px-3 py-2 border border-[#8F6CB4] h-[51px] bg-white rounded-md appearance-none"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          >
            <option value="">Select your city</option>
            {cities.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
          <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8F6CB4] pointer-events-none" />
        </div>

        {/* Top Cities */}
        <div className="flex flex-wrap gap-2">
          <p className="text-[10px] text-[#8F6CB4] block w-full">Top Cities</p>
          {cities.map((city) => (
            <button
              key={city}
              type="button"
              className={`px-4 py-1 rounded-[5px] h-[31px] border text-sm ${
                form.topCity === city
                  ? "bg-[#8F6CB4] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setForm({ ...form, topCity: city })}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Symptoms Dropdown with custom arrow */}
        <div className="relative">
          <select
            className="w-full px-3 py-2 border border-[#8F6CB4] h-[51px] bg-white rounded-md appearance-none"
            value={form.issue}
            onChange={(e) => setForm({ ...form, issue: e.target.value })}
          >
            <option value="">Select symptoms/disease/treatment</option>
            <option>Piles</option>
            <option>Fissure</option>
            <option>Fistula</option>
          </select>
          <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8F6CB4] pointer-events-none" />
        </div>

        <button className="w-full bg-[#8F6CB4] h-[51px] text-white py-2 rounded-full font-semibold mt-2">
          Book a free appointment
        </button>
      </div>
    </div>
  );
};

export default ConsultationForm;
