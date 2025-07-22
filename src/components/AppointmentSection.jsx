"use client";
import { useState } from "react";
import Image from "next/image";

export default function AppointmentSection() {
  const [selectedCity, setSelectedCity] = useState("Jaipur"); // default selection

  const topCities = ["Jaipur", "Mumbai", "Bangalore", "Delhi"];

  return (
    <section className="w-full px-10 py-16 bg-[#F7F2FC] flex justify-between items-center">
      {/* Left Side */}
      <div className="w-1/2 pr-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Every symptom is crucial, <br /> and we understand that.
        </h2>
        <p className="text-gray-600 mb-8 text-[15px] leading-relaxed">
          Your symptoms matter. Find the right doctors, treatments, <br /> and
          answers — all in one place.
        </p>

        <div className="flex space-x-6">
          {/* Card 1 */}
          <div className="bg-[#00AE3B] h-[192px] w-[143px] text-white rounded-xl p-5 text-center shadow-md">
            <p className="text-[16px] font-bold mb-2">500+ Doctors</p>
            <Image src="/p1.png" width={200} height={250} alt="Doctors" />
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-500 h-[192px] w-[143px] text-white rounded-xl p-5 text-center shadow-md">
            <p className="text-[16px] font-bold mb-2">50+ Specialists</p>
            <Image src="/p21.png" width={200} height={250} alt="Specialists" />
          </div>

          {/* Card 3 */}
          <div className="relative bg-indigo-700 h-[192px] w-[143px] text-white rounded-xl p-5 text-center shadow-md">
            <p className="text-[16px] font-bold mb-2">30+ Cities</p>
            <Image
              src="/p3.png"
              className="absolute bottom-1"
              width={200}
              height={250}
              alt="Cities"
            />
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-[360px] bg-[#FFFFFF] rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Book a Free Appointment
        </h3>

        <input
          type="text"
          placeholder="Patient Name"
          className="w-full mb-3 px-4 h-[51px] bg-[#EFEFEF] placeholder-black py-2 border border-[#E4E4E4] rounded-md text-sm"
        />
        <input
          type="text"
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
          placeholder="Select symptoms/disease/treatment"
          className="w-full mb-4 px-4 py-2 h-[51px] bg-[#EFEFEF] border border-[#E4E4E4] rounded-md text-sm"
        />

        <button className="w-full bg-[#8F6CB4] text-white py-2 rounded-md font-medium">
          Book a free appointment
        </button>
      </div>
    </section>
  );
}
