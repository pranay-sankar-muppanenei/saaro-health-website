import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = ({ onBookClick }) => {

  return (
    <section className="relative h-screen w-[90vw] border border-[#E5E5E5] border-2 mb-4 rounded-md mx-auto my-2 overflow-hidden bg-white">
      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <div className="bg-white p-4 rounded-lg shadow-md w-fit">
  <Image src="/logo2.png" alt="Logo" width={64} height={64} />
</div>


        {/* Headings */}
        <h1 className="mt-4 text-4xl md:text-5xl  text-black">
          Search, book, and cure
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mt-2">
          all in one place
        </p>

        {/* CTA Button */}
        <button onClick={onBookClick} className="mt-6 bg-[#8F6CB4] hover:scale-105 text-white px-6 py-3 rounded-full font-medium transition">
          Book a free appointment
        </button>
      </div>

      {/* Floating Card 1 - With avatars */}
  <motion.div
  className="absolute top-[10%] left-[5%] w-[230px] h-[220px] rounded-xl shadow-lg overflow-hidden"
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
>
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/card1.png" // Replace with your actual background image
      alt="Search Card Background"
      fill
      className="object-cover"
    />
  </div>

  {/* Foreground content */}
  <div className="relative bg-transparent h-full w-full p-4">
    <p className="text-sm font-semibold text-black mb-2">
      Search for doctors by symptoms
    </p>
    <input
      type="text"
      placeholder="e.g. Headache"
      className="w-full text-sm p-2 border border-gray-300 rounded bg-white"
    />
    <ul className="mt-3 flex flex-col gap-2">
      <li className="flex items-center gap-2 bg-white/80 p-1 rounded">
        <Image
          src="/inner1.png"
          alt="Dr. Aksha Verma"
          width={180}
          height={80}
          className="rounded-full"
        />
      </li>
      <li className="flex items-center gap-2 bg-white/80 p-1 rounded">
        <Image
          src="/inner1.png"
          alt="Dr. Aksha Verma"
          width={180}
          height={80}
          className="rounded-full"
        />
      </li>
    </ul>
  </div>
</motion.div>


      {/* Floating Card 2 - Just an image */}
      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[220px] rounded-xl shadow-lg overflow-hidden"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <Image
          src="/card2.png"
          alt="Floating Card 2"
          width={220}
          height={140}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Card 3 - Just an image */}
        <motion.div
        className="absolute top-[15%] right-[26%] w-[100px] rounded-xl shadow-lg overflow-hidden"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
      <Image
          src="/clock.png"
          alt="Floating Card 2"
          width={100}
          height={100}
          className="object-cover"
        />
        </motion.div>
      <motion.div
        className="absolute top-[15%] right-[8%] w-[240px] rounded-xl shadow-lg overflow-hidden"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <p className="abolute text-sm font-semibold z-100 text-black mb-2">
    simplify your surgery
    </p>
        <Image
          src="/card3.png"
          alt="Floating Card 3"
          width={240}
          height={150}
          className="w-full h-full object-cover"
        />
        
      </motion.div>
    </section>
  );
};

export default HeroSection;
