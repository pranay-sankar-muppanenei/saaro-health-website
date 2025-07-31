import React, { useState } from "react";
import Image from "next/image";
import { IoLocationOutline, IoSearch, IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import AppointmentModal from "../AppointmentModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Saaro Health" width={130} height={40} />
          </div>

          {/* Search Bar (always visible) */}
          <div className="flex-1 mx-4 hidden sm:flex">
            <div className="flex items-center border border-purple-300 rounded-[32px] h-[42px] px-2 w-full max-w-[450px]">
              <div className="flex items-center text-purple-600 space-x-1 border-r border-gray-300 pr-2">
                <IoLocationOutline size={22} />
                <span className="text-sm font-medium text-black">Jaipur</span>
              </div>
              <input
                type="text"
                placeholder="Search symptoms/disease/treatment"
                className="flex-1 pl-2 text-sm bg-transparent text-black placeholder-gray-500 focus:outline-none"
              />
              <IoSearch size={20} className="text-[#8F6CB4]" />
            </div>
          </div>

         {/* Desktop Nav */}
<div className="hidden md:flex items-center gap-4 lg:gap-6">
  {/* Surgeries Dropdown */}
  <div className="relative inline-flex items-center border border-gray-300 rounded-md px-2 py-1.5 text-sm font-medium text-black">
  <select className="appearance-none bg-transparent pr-4 pl-1 focus:outline-none">
    <option>Surgeries</option>
    <option>Gallbladder</option>
    <option>Appendectomy</option>
    <option>Hernia Repair</option>
  </select>
  <IoChevronDown className="absolute right-2 pointer-events-none text-black" size={14} />
</div>

<div className="relative inline-flex items-center border border-gray-300 rounded-md px-2 py-1.5 text-sm font-medium text-black ml-2">
  <select className="appearance-none bg-transparent pr-4 pl-1 focus:outline-none">
    <option>Specialties</option>
    <option>Cardiology</option>
    <option>Orthopedics</option>
    <option>Neurology</option>
  </select>
  <IoChevronDown className="absolute right-2 pointer-events-none text-black" size={14} />
</div>


  {/* Links */}
  <a href="#" className="text-black text-sm font-medium hover:text-purple-600 transition">Blog</a>
  <a href="#" className="text-black text-sm font-medium hover:text-purple-600 transition">Contact us</a>

  {/* CTA Button */}
  <button
    onClick={() => setIsModalOpen(true)}
    className="text-black h-[42px] font-medium border border-[#8F6CB4] rounded-[32px] px-4 text-sm hover:bg-purple-50 transition"
  >
    Book a free appointment
  </button>
</div>


          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-4">
            {/* Searchbar visible in mobile below logo */}
            <div className="flex sm:hidden mb-2">
              <div className="flex items-center border border-purple-300 rounded-[32px] h-[42px] px-2 w-full">
                <div className="flex items-center text-purple-600 space-x-1 border-r border-gray-300 pr-2">
                  <IoLocationOutline size={22} />
                  <span className="text-sm font-medium text-black">Jaipur</span>
                </div>
                <input
                  type="text"
                  placeholder="Search symptoms/disease/treatment"
                  className="flex-1 pl-2 text-sm bg-transparent text-black placeholder-gray-500 focus:outline-none"
                />
                <IoSearch size={20} className="text-[#8F6CB4]" />
              </div>
            </div>

            <div className="space-y-3">
              {/* Dropdowns */}
              <div className="relative">
                <select className="w-full appearance-none bg-white text-black text-sm font-medium pl-3 pr-8 py-2 rounded-md border border-gray-300">
                  <option>Surgeries</option>
                  <option>Gallbladder Removal</option>
                  <option>Appendectomy</option>
                  <option>Hernia Repair</option>
                </select>
                <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" size={16} />
              </div>

              <div className="relative">
                <select className="w-full appearance-none bg-white text-black text-sm font-medium pl-3 pr-8 py-2 rounded-md border border-gray-300">
                  <option>Specialties</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Neurology</option>
                </select>
                <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" size={16} />
              </div>

              {/* Links */}
              <a href="#" className="block text-sm font-medium text-black">Blog</a>
              <a href="#" className="block text-sm font-medium text-black">Contact us</a>

              {/* CTA Button */}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-black font-medium border border-[#8F6CB4] rounded-[32px] px-4 py-2 text-sm hover:bg-purple-50"
              >
                Book a free appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal */}
      {isModalOpen && (
        <AppointmentModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
