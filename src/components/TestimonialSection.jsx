// components/TestimonialsSection.jsx
import React from "react";

const TestimonialsSection = () => {
  const testimonials = new Array(6).fill({
    name: "Sheila Bennett",
    location: "Mumbai",
    message:
      "We’ve partnered with India’s leading hospitals to ensure you receive the highest standard of treatment, wherever you are.",
  });

  return (
    <section className="px-4 py-16 bg-white text-center">
      <h2 className="text-[30px] md:text-[40px]  font-dm mb-2">Patients love Saaro, because</h2>

      <p className="text-[#8F6CB4] text-[33px] md:text-[40px]  font-dm italic mb-10">Saaro understands</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`p-4 rounded-2xl border ${
              i === 0 ? "bg-purple-100 border-purple-200" : "bg-white border-gray-200"
            } text-left flex flex-col justify-between min-h-[160px]`}
          >
            <p className="text-sm mb-4">{t.message}</p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
