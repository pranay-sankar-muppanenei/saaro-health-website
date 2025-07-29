import React, { useState } from 'react';
import { useRouter } from 'next/router';
import StepIndicator from '../ui/StepIndicator';
import { FaChevronDown } from 'react-icons/fa';

const AppointmentStep1 = () => {
  const router = useRouter();
  const [disease, setDisease] = useState('');
  const [doctor, setDoctor] = useState('');
  const [isOpen, setIsOpen] = useState({ disease: false, doctor: false });

  const diseases = ['Piles', 'Fissure', 'Fistula', 'Hernia'];
  const doctors = ['Dr. Ankit Sharma', 'Dr. Meera Patel', 'Dr. Kiran Rao'];

  const isCompleted = disease && doctor;

  const handleNext = () => {
    if (isCompleted) {
      router.push('/appointment/step2');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="h-16 flex items-center justify-center bg-[#F2F2F2] shadow-md">
        <img src="/logo.png" alt="Logo" className="h-5" />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 p-10 flex flex-col space-y-10 bg-white">
          <h2 className="text-[24px] font-dm font-semibold">Book a Free Appointment</h2>
          <StepIndicator currentStep={1}/>

          {/* Disease Dropdown */}
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-gray-700">Disease</label>
            <button
              onClick={() => setIsOpen(prev => ({ ...prev, disease: !prev.disease }))}
              className="w-full border border-gray-300 bg-[#F0F0F0] text-[#4B4B4B] rounded px-4 py-2 text-left flex justify-between items-center"
            >
              {disease || 'Select your treatment'}
              <FaChevronDown className="ml-2 text-gray-500" />
            </button>
            {isOpen.disease && (
              <ul className="absolute z-10 bg-white border w-full mt-1 rounded shadow">
                {diseases.map((item, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setDisease(item);
                      setIsOpen(prev => ({ ...prev, disease: false }));
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Doctor Dropdown */}
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-gray-700">Doctor</label>
            <button
              onClick={() => setIsOpen(prev => ({ ...prev, doctor: !prev.doctor }))}
              className="w-full border border-gray-300 bg-[#F0F0F0] text-[#4B4B4B] rounded px-4 py-2 text-left flex justify-between items-center"
            >
              {doctor || 'Select a doctor'}
              <FaChevronDown className="ml-2 text-gray-500" />
            </button>
            {isOpen.doctor && (
              <ul className="absolute z-10 bg-white border w-full mt-1 rounded shadow">
                {doctors.map((doc, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setDoctor(doc);
                      setIsOpen(prev => ({ ...prev, doctor: false }));
                    }}
                  >
                    {doc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <button className="border border-[#8F6CB4] px-6 py-2 rounded-full">Back</button>
            <button
              onClick={handleNext}
              className={`px-6 py-2 rounded-full ${
                isCompleted
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
              disabled={!isCompleted}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/cabin.png')` }} />
      </div>
    </div>
  );
};

export default AppointmentStep1;
