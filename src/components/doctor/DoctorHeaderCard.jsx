import React from "react";

const DoctorHeaderCard = ({ doctor }) => {
  return (
    <div className="relative flex items-start md:items-center gap-4">
      {/* Doctor Image (outside card) */}
      <div className="relative h-[218px]">
        <img
          src="/sampledoctor.png"
          alt={doctor.name}
          className="w-28 h-48 md:w-39 md:h-full rounded-xl object-cover   shadow-lg"
        />
      </div>

      {/* Card */}
      <div className="flex-1  bg-white border border-[#D8D8D8] rounded-xl p-4  md:p-6 shadow-sm flex flex-col justify-between">
        {/* Certified label + Reviews (row) */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs bg-[#E4D4F6] text-[#791BC7] px-3 py-1 rounded-tl-full rounded-br-full font-medium">
            ✅ You are viewing our certified doctor
          </p>
          <span className="text-sm text-gray-700">
            🌟 {doctor.rating} ({doctor.reviews} reviews)
          </span>
        </div>

        {/* Name + Details */}
        <div className="mb-4 flex justify-between">
            <div className="space-y-2">
                <h2 className="text-xl font-dm font-semibold text-black text-600">{doctor.name}</h2>
                <p className="text-sm text-gray-600">{doctor.speciality}</p>
                <p className="text-[13px] text-[#791BC7] bg-[#E4D4F6] rounded-full text-center font-medium">{doctor.qualification}</p>
                <p className="text-sm text-black">{doctor.experience} Years Experience</p>
                <button className="bg-[#FDC72C]  text-white text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[#eab308] transition-all duration-200">
  ₹1000 FREE Consultation Today
</button>

            </div>
          {/* Promo    {doctor.promo && (
            <div className="bg-[#FFD700] text-[12px] font-medium italic px-2 py-1 inline-block mt-2 rounded-sm">
              {doctor.promo}
            </div>
          )} */}
      
            <div className="flex flex-col gap-2">
          <button className="bg-[#8F6CB4] hover:bg-[#7b56e8] text-white px-4 py-2 rounded-full text-sm w-full">
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

        {/* Buttons - flex-col justify-between */}
      
      </div>
    </div>
  );
};

export default DoctorHeaderCard;
