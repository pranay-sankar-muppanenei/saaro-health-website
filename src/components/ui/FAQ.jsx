'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="bg-white px-4 py-12 md:px-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
        {title}
      </h2>

      <div className="space-y-4 flex flex-col items-center">
        {faqs.map((item, idx) => (
          <div key={idx} className="border w-full md:w-[800px] border-purple-300 rounded-xl p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(idx)}
            >
              <span className="text-sm font-medium text-gray-800">
                {item.question}
              </span>
              {openIndex === idx ? (
                <Minus className="text-purple-600 w-5 h-5" />
              ) : (
                <Plus className="text-purple-600 w-5 h-5" />
              )}
            </div>

            {openIndex === idx && (
              <div className="mt-3 text-sm text-gray-700 bg-purple-50 p-3 rounded-md border border-purple-100">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-[#8F6CB4] hover:bg-purple-700 text-white text-sm font-medium px-6 py-2 rounded-full transition">
          View all questions
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
