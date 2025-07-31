import React, { useState } from "react";
import Image from "next/image";
import {
  IoLocationOutline,
  IoSearch,
  IoMenu,
  IoClose,
  IoNewspaperOutline,
  IoCallOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import AppointmentModal from "../AppointmentModal";
import CustomDropdown from "../ui/CustomDropdown";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
        <div className="relative max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Saaro Health" width={130} height={40} />
          </div>

          <div className="flex">
            {/* Search Bar */}
            <div className="flex-1 mx-4 hidden md:flex">
              <div className="flex items-center border border-purple-300 rounded-[32px] h-[42px] px-2 w-full max-w-[330px]">
                <div className="flex items-center text-purple-600 space-x-1 border-r border-gray-300 pr-2">
                  <IoLocationOutline size={22} />
                  <span className="text-sm font-medium text-black">Jaipur</span>
                </div>
                <input
                  type="text"
                  placeholder="symptoms/disease/treatment"
                  className="flex-1 pl-2 text-sm bg-transparent text-black placeholder-gray-500 focus:outline-none"
                />
                <IoSearch size={20} className="text-[#8F6CB4]" />
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <CustomDropdown label="Surgeries" options={["Surgeries", "Gallbladder Removal", "Appendectomy", "Hernia Repair"]} />
              <CustomDropdown label="Specialties" options={["Specialities", "Cardiology", "Orthopedics", "Neurology"]} />

              {/* Icons till lg, full text above lg */}
              <a href="#" className="text-black text-sm font-medium hover:text-purple-600 transition hidden lg:inline">Blog</a>
              <a href="#" className="text-black text-sm font-medium hover:text-purple-600 transition inline lg:hidden">
                <IoNewspaperOutline size={20} />
              </a>

              <a href="#" className="text-black text-sm font-medium hover:text-purple-600 transition hidden lg:inline">Contact us</a>
              <a href="#" className="text-black text-sm font-medium hover:text-purple-600 transition inline lg:hidden">
                <IoCallOutline size={20} />
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="h-[42px] border border-[#8F6CB4] rounded-[32px] px-3 text-sm text-black font-medium hover:bg-purple-50 transition flex items-center justify-center"
              >
                {/* Icon only on small screens, text on lg+ */}
                <span className="hidden lg:inline">Book free appointment</span>
                <IoCalendarOutline size={20} className="inline lg:hidden" />
              </button>
            </div>
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
          <div className="absolute right-1 top-13 bg-white z-10 w-[300px] md:hidden px-4 pb-4 space-y-4">
            {/* Mobile Search */}
            <div className="flex sm:hidden mb-2">
              <div className="flex items-center border border-purple-300 rounded-[32px] h-[42px] px-2 w-full">
                <div className="flex items-center text-purple-600 space-x-1 border-r border-gray-300 pr-2">
                  <IoLocationOutline size={22} />
                  <span className="text-sm font-medium text-black">Jaipur</span>
                </div>
                <input
                  type="text"
                  placeholder="Search disease/treatment"
                  className="flex-1 pl-2 text-sm bg-transparent text-black placeholder-gray-500 focus:outline-none"
                />
                <IoSearch size={20} className="text-[#8F6CB4]" />
              </div>
            </div>

            <div className="space-y-3">
              {/* Dropdowns */}
              <CustomDropdown label="Surgeries" options={["Gallbladder Removal", "Appendectomy", "Hernia Repair"]} />
              <CustomDropdown label="Specialties" options={["Cardiology", "Orthopedics", "Neurology"]} />

              {/* Links with icons */}
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-black">
                <IoNewspaperOutline size={18} /> Blog
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium text-black">
                <IoCallOutline size={18} /> Contact us
              </a>

              {/* CTA Button */}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 text-black font-medium border border-[#8F6CB4] rounded-[32px] px-4 py-2 text-sm hover:bg-purple-50"
              >
                <IoCalendarOutline size={18} /> Book a free appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal */}
      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;
