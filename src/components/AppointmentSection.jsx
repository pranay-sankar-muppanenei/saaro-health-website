"use client";
import { useState } from "react";
import Image from "next/image";
import AppointmentForm from "./ui/AppointmentForm";

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
      <AppointmentForm topCities={topCities}/>
      
    </section>
  );
}
