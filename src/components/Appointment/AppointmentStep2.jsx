import React, { useState } from 'react';
import { useRouter } from 'next/router';
import StepIndicator from '../ui/StepIndicator';

const AppointmentStep2 = () => {
  const router = useRouter();

  const [patientName, setPatientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const cities = ['Jaipur', 'Delhi', 'Mumbai', 'Bangalore'];

  const isCompleted = patientName && mobileNumber && city;

  const handleNext = () => {
    if (isCompleted) {
      router.push('/appointment/step3'); // Go to Step 3
    }
  };

  const handleBack = () => {
    router.push('/appointment/step1'); // Go back to Step 1
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
        <div className="w-1/2 p-10 flex flex-col space-y-8 bg-white">
          {/* Heading */}
          <h2 className="text-[24px] font-dm font-semibold">Book a Free Appointment</h2>

          {/* Progress */}
          <StepIndicator currentStep={2}/>

          {/* Form Title */}
          <p className="text-[16px] font-dm">Submit your details</p>

          {/* Patient Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Patient Name</label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter patient name"
              className="w-full border border-gray-300 bg-[#F0F0F0] text-[#4B4B4B] rounded px-4 py-2"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="+91 9876543210"
              className="w-full border border-gray-300 bg-[#F0F0F0] text-[#4B4B4B] rounded px-4 py-2"
            />
          </div>

          {/* Select City */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Select city</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border border-gray-300 bg-[#F0F0F0] text-[#4B4B4B] rounded px-4 py-2"
            >
              <option value="">Select city</option>
              {cities.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500">
            By submitting this request, you are agreeing to our{' '}
            <span className="text-blue-500 underline">privacy policy</span>.
          </p>

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <button
              onClick={handleBack}
              className="border border-[#8F6CB4] px-6 py-2 rounded-full"
            >
              Back
            </button>
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

        {/* Right Panel Image */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url('/cabin.png')` }}
        />
      </div>
    </div>
  );
};

export default AppointmentStep2;
