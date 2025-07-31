import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";


const CustomDropdown = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  return (
    <div className="relative  text-sm font-medium">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-auto  py-2 bg-white text-black"
      >
        <span>{selected}</span>
   {open ? <IoChevronUp className="ml-2" /> : <IoChevronDown className="ml-2" />}

      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-auto bg-white border border-gray-300 rounded-md shadow">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CustomDropdown;