import React from 'react';
import { CheckCircle } from 'lucide-react';

const SurgeryBenefits = () => {
  const benefits = [
    '95%+ Permanent Relief Rate',
    'Quick Recovery',
    'Pain-Free & Stitch-Free',
    'Covered by Major Insurance Providers',
  ];

  return (
    <section className="flex flex-col lg:flex-row items-start justify-between gap-10 px-4 lg:px-20 py-12 bg-white">
      {/* Left Text Content */}
      <div className="max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          A Small Step Towards a<br />Healthier, Pain-Free Life
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Living with piles can silently affect your daily life — from pain and discomfort to embarrassing moments. Modern surgical treatments offer quick relief, high success rates, and a permanent solution.
        </p>
      </div>

      {/* Right Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {benefits.map((text, idx) => (
          <div key={idx} className="flex items-center gap-4 p-2 rounded-lg bg-[#F9F4FF] shadow-sm">
            <div className="w-[66px] h-[66px] rounded-full bg-[#8F6CB4]" />
            <p className="text-[14px] font-medium">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SurgeryBenefits;
