import React, { useState } from 'react';
import { useRouter } from 'next/router';
import StepIndicator from '../ui/StepIndicator';

const AppointmentStep3 = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('July 12, 2025');

  const handleBook = () => {
    alert(`Appointment booked for ${selectedDate}`);
  };

  const handleBack = () => {
    router.push('/appointment/step2'); // Go back to Step 2
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
          <StepIndicator currentStep={3}/>

          {/* Date Selection */}
          <p className="text-[16px] font-dm">Pick your slot</p>
          <button
            onClick={() => {}}
            className="bg-[#E0D4F3] text-[#4B4B4B] w-[300px] px-6 py-2 rounded-md"
          >
            {selectedDate}
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-500">
            By submitting this request, you are agreeing to our{' '}
            <span className="text-blue-500 underline">privacy policy</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleBook}
              className="bg-[#8F6CB4] w-[300px] text-white px-6 py-2 rounded-full"
            >
              Book a free appointment
            </button>
            <button
              onClick={handleBack}
              className="border border-[#8F6CB4] w-[300px] px-6 py-2 rounded-full"
            >
              Back
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

export default AppointmentStep3;
