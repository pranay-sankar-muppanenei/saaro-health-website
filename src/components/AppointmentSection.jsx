"use client";
import { useState } from "react";
import Image from "next/image";
import AppointmentForm from "./ui/AppointmentForm";

export default function AppointmentSection() {
  const [selectedCity, setSelectedCity] = useState("Jaipur");

  const topCities = ["Jaipur", "Mumbai", "Bangalore", "Delhi"];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-16 bg-[#F7F2FC]">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="w-full flex flex-col items-center lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            Every symptom is crucial, <br /> and we understand that.
          </h2>
          <p className="text-gray-600 mb-8 text-[15px] leading-relaxed text-center lg:text-left">
            Your symptoms matter. Find the right doctors, treatments, <br /> and
            answers — all in one place.
          </p>

          <div className="flex justify-center lg:justify-center gap-4 flex-wrap">
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
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <AppointmentForm topCities={topCities} />
        </div>
      </div>
    </section>
  );
}
