import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";


const HealthcareSection = () => {
  return (
    <section className="bg-[#f8f6fc] py-12 px-10 overflow-visible relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 relative z-10">
        {/* Left Side Text */}
        <div className="md:w-1/2 z-10">
          <h2 className="text-[30px] md:text-[40px] font-dm  text-black mb-2">
            Healthcare that listens
          </h2>
          <p className="text-sm italic text-gray-500 mb-4">Now just a tap away.</p>

          <p className="text-sm font-semibold text-gray-700 mb-6 leading-relaxed">
            No more searching endlessly or waiting in lines. <br />
            With SaaroHealth, you can find the right doctor, book a free consultation,
            and feel taken care of — all from your phone.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Download SaaroHealth App
          </button>

          <div className="flex items-center gap-4 text-xs text-gray-600 mt-4">
            <span>The mobile app is available now.</span>
            <div className="flex items-center gap-4 text-black text-xl">
              <div className="border rounded-full p-2">
              <FaApple className="hover:text-gray-700 cursor-pointer" />
              </div>
              <div className="border rounded-full p-2">
  <FaGooglePlay className="hover:text-green-600 cursor-pointer" />
  </div>

            </div>
          </div>
        </div>

        {/* Right Side Image */}
{/* Right Side Image */}
<div className="md:w-1/2 flex justify-center relative overflow-visible">
  <div className="relative z-10">
    <Image
      src="/phone.png"
      alt="Saaro App"
      width={300}
      height={800}
      className=" md:-translate-y-33 h-[400px]"
    />
    {/* Shadow below the phone */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-36 h-3 bg-black/20 rounded-full blur-sm z-[-1]" />

  </div>
</div>


      </div>
    </section>
  );
};

export default HealthcareSection;
