import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 border-t-2 border-gray-200">
      <div className="max-w-6xl flex flex-wrap justify-between mx-auto gap-10 text-sm text-gray-700">

        {/* Brand Column */}
        <div className="min-w-[200px] flex flex-col gap-4">
          <img
            src="/logo.png"
            alt="Saaro Health Logo"
            className="h-13 w-auto mb-4"
          />
          <p className="text-sm text-gray-600 mb-4">
            Doctors, Treatments, Tests, and meds, all in one place.
          </p>
          <div className="flex gap-4 text-black text-[24px]">
            <a href="#" aria-label="Facebook"><Facebook className="hover:text-blue-600 transition" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="hover:text-pink-500 transition" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="hover:text-blue-400 transition" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="hover:text-blue-700 transition" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="hover:text-red-500 transition" /></a>
          </div>
        </div>

        {/* Company Column */}
        <div className="min-w-[150px]">
          <h4 className="font-semibold mb-2">Our Company</h4>
          <ul className="space-y-1">
            {["About us", "Contact", "Privacy Policy", "Terms"].map((item, idx) => (
              <li key={idx} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Surgery Column */}
        <div className="min-w-[150px]">
          <h4 className="font-semibold mb-2">Surgery</h4>
          <ul className="space-y-1">
            {["LASIK", "Piles", "Varicose Veins", "Gallbladder", "Hernia"].map((item, idx) => (
              <li key={idx} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Top Cities Column */}
        <div className="min-w-[150px]">
          <h4 className="font-semibold mb-2">Top Cities</h4>
          <ul className="space-y-1">
            {["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad"].map((city, idx) => (
              <li key={idx} className="hover:underline cursor-pointer">{city}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
