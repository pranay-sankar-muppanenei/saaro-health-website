import React from "react";

const logos = [
  { src: "/apollo.png", alt: "Apollo", style: "top-0 left-60" },
  { src: "/medanta.png", alt: "Medanta", style: "top-10 right-103" },
  { src: "/fortis.png", alt: "Fortis", style: "top-24 left-5" },
  { src: "/artemis.png", alt: "Artemis", style: "bottom-1 left-60" },
  { src: "/narayana.png", alt: "Narayana", style: "bottom-12 right-28" },
  { src: "/max.png", alt: "Max", style: "bottom-0 right-104" },
  { src: "/joyride.png", alt: "Joyride", style: "top-15 right-1/2 -translate-x-1/2" },
   { src: "/fortis.png", alt: "Narayana", style: "top-60 right-18" },
     { src: "/medanta.png", alt: "Medanta", style: "top-5 right-9" },
];

const HospitalPartners = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="w-full mx-auto relative text-center  rounded-3xl p-10  overflow-hidden">
        {/* Heading and Text */}
        <h2 className="text-[40px] font-dm  mb-4 text-gray-900 relative z-10">
          Our Trusted <br className="md:hidden" />
          Hospital Partners
        </h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto mb-10 relative z-10">
          We’ve partnered with India’s leading hospitals to ensure you receive the highest standard of treatment, wherever you are.
        </p>

        {/* Floating Logos */}
        <div className="relative w-full h-[250px]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`absolute ${logo.style} w-16 h-16 md:w-20 md:h-20 bg-white shadow-md rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-105`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalPartners;
