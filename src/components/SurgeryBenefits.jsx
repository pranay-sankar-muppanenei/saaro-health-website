import React from 'react';
import { CheckCircle } from 'lucide-react';

const SurgeryBenefits = ({ benefits = [] }) => {
  return (
    <section className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-between gap-10 px-4 sm:px-8 lg:px-20 py-12 bg-white">
      
      {/* Left Text Content */}
      <div className="w-full md:max-w-md lg:text-left text-center">
        <h2 className="md:text-2xl text-xl font-bold text-gray-900 mb-4 leading-snug">
          A Small Step Towards a<br />Healthier, Pain-Free Life
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Modern surgical treatments offer quick relief, high success rates, and a permanent solution.
        </p>
      </div>

      {/* Right Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        {benefits.map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-[#F9F4FF] shadow-sm"
          >
            <div className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] flex-shrink-0 rounded-full bg-[#8F6CB4] flex items-center justify-center">
              <CheckCircle className="text-white w-6 h-6" />
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-800">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SurgeryBenefits;
