import React from 'react';

const StepIndicator = ({ currentStep }) => {
  const steps = ["Service", "Details", "Schedule"];

  return (
    <div className="flex items-center justify-between w-full max-w-md">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = currentStep > stepNumber;
        const isActive = currentStep === stepNumber;

        return (
          <div key={index} className="flex items-center">
            {/* Step Circle */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border 
                ${isCompleted ? 'bg-blue-600 text-white' :
                isActive ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}
              `}
            >
              {stepNumber}
            </div>

            {/* Step Label */}
            <span
              className={`ml-2 text-sm font-medium 
                ${isActive ? 'text-blue-600' : 'text-black'}
              `}
            >
              {step}
            </span>

            {/* Line Connector */}
            {index < steps.length - 1 && (
              <div
                className={`w-12 h-[2px] mx-2 
                  ${isCompleted ? 'bg-blue-600' : 'bg-gray-300'}
                `}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
