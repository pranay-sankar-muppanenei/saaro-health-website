// components/sections/HealthcareAppPromo.jsx
import React from 'react';
import phoneImage from '../../public/assets/phone.png'; // adjust path as needed
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const HealthcareAppPromo = () => {
  return (
    <section className="bg-[#f5f3ff] py-12 px-4 md:px-16 rounded-[20px] mt-10 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Healthcare that listens
        </h2>
        <p className="text-[#6b7280] italic">Now just a tap away.</p>
        <p className="text-sm font-medium underline text-blue-700 leading-6">
          No more searching endlessly or waiting in lines.<br />
          With SaaroHealth, you can find the right doctor, book a free consultation, and feel taken care of — all from your phone.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-medium mt-2">
          Download SaaroHealth App
        </button>
        <div className="flex items-center gap-4 text-sm text-gray-700 mt-4">
          <span>The mobile app is available now.</span>
          <FaGooglePlay className="text-lg" />
          <FaApple className="text-lg" />
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src={phoneImage.src} alt="Phone" className="mx-auto w-[260px] md:w-[300px]" />
      </div>
    </section>
  );
};

export default HealthcareAppPromo;
