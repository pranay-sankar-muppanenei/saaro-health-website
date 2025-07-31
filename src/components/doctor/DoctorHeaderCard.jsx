import React from "react";

const DoctorHeaderCard = ({ doctor }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4">
      {/* Doctor Image */}
      <div className="relative h-[218px] mx-auto md:mx-0">
        <img
          src="/sampledoctor.png"
          alt={doctor.name}
          className="w-70 h-48 md:w-39 md:h-full rounded-xl object-cover shadow-lg"
        />
      </div>

      {/* Card */}
      <div className="flex-1 bg-white border border-[#D8D8D8] rounded-xl p-4 md:p-6 shadow-sm flex flex-col justify-between w-full">
        {/* Certified label + Reviews */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
          <p className="text-xs bg-[#E4D4F6] text-[#791BC7] px-3 py-1 rounded-tl-full rounded-br-full font-medium w-fit">
            ✅ You are viewing our certified doctor
          </p>
          <span className="text-sm text-gray-700">
            🌟 {doctor.rating} ({doctor.reviews} reviews)
          </span>
        </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* Doctor Info */}
          <div className="space-y-2">
            <h2 className="text-xl font-dm font-semibold text-black">
              {doctor.name}
            </h2>
            <p className="text-sm text-gray-600">{doctor.speciality}</p>
            <p className="text-[13px] text-[#791BC7] bg-[#E4D4F6] rounded-full px-3 py-1 inline-block font-medium">
              {doctor.qualification}
            </p>
            <p className="text-sm text-black">{doctor.experience} Years Experience</p>
            <button className="bg-[#FDC72C] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[#eab308] transition-all duration-200">
              ₹1000 FREE Consultation Today
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <button className="bg-[#8F6CB4] hover:bg-[#7b56e8] text-white px-4 py-2 rounded-full text-sm md:w-full">
              Book a free appointment
            </button>
            <a
              href={`tel:${doctor.contact}`}
              className="bg-[#00AE3B] hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm w-full text-center"
            >
              Call us: {doctor.contact}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHeaderCard;
