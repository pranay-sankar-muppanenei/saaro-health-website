import React, { useState } from "react";
import Image from "next/image";
import { IoLocationOutline, IoSearch, IoChevronDown } from "react-icons/io5";
import AppointmentModal from "../AppointmentModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Saaro Health" width={130} height={80} />
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="flex items-center border border-purple-300 rounded-[32px] h-[42px] px-2 w-[358px]">
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

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-4 text-sm font-medium text-gray-700">
              {/* Surgeries Dropdown */}
              <div className="relative w-[100px]">
                <select className="w-full appearance-none bg-transparent text-black text-[14px] focus:outline-none pr-6 truncate">
                  <option>Surgeries</option>
                  <option>Gallbladder Removal</option>
                  <option>Appendectomy</option>
                  <option>Hernia Repair</option>
                </select>
                <IoChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" size={14} />
              </div>

              {/* Specialties Dropdown */}
              <div className="relative w-[100px]">
                <select className="w-full appearance-none bg-transparent text-black text-[14px] focus:outline-none pr-6 truncate">
                  <option>Specialties</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Neurology</option>
                </select>
                <IoChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" size={14} />
              </div>

              <a href="#" className="text-black text-[14px]">Blog</a>
              <a href="#" className="text-black text-[14px]">Contact us</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-black h-[42px] font-medium border border-[#8F6CB4] rounded-[32px] px-4 text-[14px] hover:bg-purple-50"
              >
                Book a free appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <AppointmentModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
