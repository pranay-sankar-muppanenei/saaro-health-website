"use client";
import { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const Dropdown = ({ label = "Select", options = [] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid SSR mismatch

  return (
    <div className="relative">
      <select className="appearance-none bg-transparent pl-1 pr-4 text-sm font-medium text-gray-700 focus:outline-none">
        <option>{label}</option>
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
      <IoChevronDown
        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
        size={14}
      />
    </div>
  );
};

export default Dropdown;
