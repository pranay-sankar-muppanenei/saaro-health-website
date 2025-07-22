import React, { useState } from "react";
import {
  FaEye, FaBrain, FaUserMd, FaHeartbeat, FaUserNurse,
} from "react-icons/fa";
import {
  MdPsychology, MdRecordVoiceOver, MdGraphicEq,
} from "react-icons/md";
import {
  GiStethoscope, GiTooth, GiSpinalCoil, GiMuscleUp, GiNoseSide,
} from "react-icons/gi";
import { BsPersonStanding } from "react-icons/bs";

const doctorCategories = [
  { label: "Ophthalmologist", icon: <FaEye /> },
  { label: "Dermatologist", icon: <FaUserMd /> },
  { label: "Cardiologist", icon: <FaHeartbeat /> },
  { label: "Psychiatrist", icon: <MdPsychology /> },
  { label: "ENT", icon: <GiNoseSide /> },
  { label: "Neurologist", icon: <FaBrain /> },
  { label: "Urologist", icon: <GiStethoscope /> },
  { label: "Physiotherapist", icon: <GiMuscleUp /> },
  { label: "Acupuncturist", icon: <GiSpinalCoil /> },
  { label: "Psychologist", icon: <FaUserNurse /> },
  { label: "Speech", icon: <MdRecordVoiceOver /> },
  { label: "Audiologist", icon: <MdGraphicEq /> },
  { label: "Dietician/Nutritionist", icon: <BsPersonStanding /> },
  { label: "Anal Fissure", icon: <GiTooth /> },
];

const DoctorCategories = () => {
  const [selected, setSelected] = useState("Ophthalmologist");

  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-[40px] font-dm text-400">
  Consult top doctors for <br />
  <span className="text-[40px] font-dm" >
    any
  </span>{" "}
  <span className="text-[#8F6CB4] font-dm italic">
    health concern
  </span>
</h2>


      <div className="relative overflow-hidden mt-8">
        <div className="flex animate-slide whitespace-nowrap space-x-4 px-4">
          {[...doctorCategories, ...doctorCategories].map((item, index) => {
            const isSelected = item.label === selected;

            return (
              <div
                key={index}
                onClick={() => setSelected(item.label)}
                className={`min-w-[150px] h-[140px] cursor-pointer transition-all duration-300 border-2 rounded-lg flex flex-col items-center justify-center 
                  ${isSelected ? "bg-purple-100 border-purple-500 shadow-md" : "border-gray-300 hover:bg-gray-100"}`}
              >
                <div className={`text-2xl mb-2 ${isSelected ? "text-purple-600" : "text-black"}`}>
                  {item.icon}
                </div>
                <p className={`text-xs ${isSelected ? "text-purple-600 font-medium" : "text-gray-700"}`}>
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <button className="mt-8 h-[50px] w-[290px] px-6 py-2 text-purple-600 border border-purple-500 rounded-full hover:bg-purple-100 transition">
        View More
      </button>
    </section>
  );
};

export default DoctorCategories;
