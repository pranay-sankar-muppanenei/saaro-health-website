import React from "react";
import Image from "next/image";

const steps = [
  {
    imgSrcs: ["/search.png", "/plus.png", "/list.png"],
    alt: "Find doctor icons",
    text: "Find top doctors and hospitals for your condition.",
  },
  {
    imgSrc: "/cal.png",
    alt: "Talk to expert icon",
    text: "Talk to verified experts — at no cost.",
  },
  {
    imgSrc: "/heart.png",
    alt: "Trusted hospitals icon",
    text: "Receive treatment at trusted hospitals.",
  },
];

const StepsSection = () => {
  return (
    <section className="text-center flex flex-col items-center w-full px-4 py-16 bg-white">
      {/* Title */}
      <h2 className="text-[40px] font-dm font-medium text-gray-800 mb-16">
        Quick. Clear. Hassle-free.
      </h2>

      {/* Step Cards */}
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-stretch gap-12 mb-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center max-w-xs mx-auto px-4"
          >
            {/* Number Circle */}
            <div className="absolute -top-8  left-1/2 -translate-x-1/2">
              <div className="bg-[#548765] text-white text-sm w-7 h-7 rounded-full flex items-center justify-center shadow">
                {index + 1}
              </div>
            </div>

            {/* Icon(s) */}
            <div className="mb-4 mt-6 flex justify-center items-center gap-3">
              {step.imgSrcs ? (
                step.imgSrcs.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`${step.alt} ${i + 1}`}
                    width={i === 1 ? 20 : 48}
                    height={i === 1 ? 20 : 48}
                    className="object-contain mb-3"
                  />
                ))
              ) : (
                <Image
                  src={step.imgSrc}
                  alt={step.alt}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              )}
            </div>

            {/* Step Text */}
            <p className="text-base font-medium text-gray-700 leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <p className="text-base italic text-gray-600 mb-4">Need help deciding?</p>
      <button className="bg-[#8F6CB4] hover:bg-[#7c5aa7] transition-colors text-white text-sm px-6 py-3 rounded-full flex items-center justify-center gap-2">
        <i className="fa-solid fa-phone-volume"></i>
        Talk to our medical advisors – it’s free!
      </button>
    </section>
  );
};

export default StepsSection;
