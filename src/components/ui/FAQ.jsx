'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const defaultFaqs = [
  {
    question: 'Which Doctor is Best for Piles Surgery?',
    answer:
      'A proctologist or a general surgeon is considered to be the best doctor for piles surgery. A proctologist specializes in diagnosing and treating colorectal diseases including those related to the colon, rectum, and anus.',
  },
  {
    question: 'Is piles surgery painful?',
    answer:
      'Modern piles surgeries like laser treatment are minimally invasive and typically pain-free, with faster recovery times compared to traditional surgery.',
  },
  {
    question: 'What is the recovery time for piles surgery?',
    answer:
      'Most patients recover within 3 to 5 days after undergoing laser surgery for piles. Recovery time can vary depending on the type of procedure.',
  },
  {
    question: 'Does piles surgery require hospitalization?',
    answer:
      'Minimally invasive piles surgeries usually do not require hospitalization. Patients are often discharged the same day.',
  },
  {
    question: 'Is piles surgery covered under insurance?',
    answer:
      'Yes, many modern piles surgeries are covered by major health insurance providers. It’s best to verify with your insurer beforehand.',
  },
];

const FAQSection = ({
  title = 'FAQs Around Piles Treatment',
  faqs = defaultFaqs,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white px-4 py-12 md:px-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
        {title}
      </h2>

      <div className="space-y-4 flex flex-col items-center">
        {faqs.map((item, idx) => (
          <div key={idx} className="border w-[800px] border-purple-300 rounded-xl p-4">
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
