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
      <div className="max-w-6xl mx-auto text-sm text-gray-700 flex flex-col md:flex-row md:justify-between gap-10">
        
        {/* Brand Column - full row below md */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
          <img
            src="/logo.png"
            alt="Saaro Health Logo"
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm text-gray-600 mb-4 max-w-sm">
            Doctors, Treatments, Tests, and meds, all in one place.
          </p>
          <div className="flex gap-4 text-black text-[24px] justify-center md:justify-start">
            <a href="#" aria-label="Facebook">
              <div className="border rounded-full p-2 hover:text-blue-600 transition">
                <Facebook />
              </div>
            </a>
            <a href="#" aria-label="Instagram">
              <div className="border rounded-full p-2 hover:text-pink-500 transition">
                <Instagram />
              </div>
            </a>
            <a href="#" aria-label="Twitter">
              <div className="border rounded-full p-2 hover:text-blue-400 transition">
                <Twitter />
              </div>
            </a>
            <a href="#" aria-label="LinkedIn">
              <div className="border rounded-full p-2 hover:text-blue-700 transition">
                <Linkedin />
              </div>
            </a>
            <a href="#" aria-label="YouTube">
              <div className="border rounded-full p-2 hover:text-red-500 transition">
                <Youtube />
              </div>
            </a>
          </div>
        </div>

        {/* Link Columns Row */}
        <div className="flex flex-wrap justify-between gap-4 w-full md:w-auto">
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
      </div>
    </footer>
  );
};

export default Footer;
