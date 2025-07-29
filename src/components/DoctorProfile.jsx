import React, { useRef, useState } from "react";
import DoctorHeaderCard from "../components/doctor/DoctorHeaderCard";
import ConsultationForm from "../components/doctor/ConsultationForm";
import { ChevronLeft, ChevronRight } from "lucide-react";

// You can set default doctor data if none is passed (optional)
const fallbackDoctor = {
  name: "Dr. Ankit Sharma",
  experience: "12 Years Experience",
  qualification: "MBBS, MS (General Surgery)",
  contact: "+91 8196847089",
  city: "Jaipur",
  rating: "4.8",
  reviews: 120,
  awards: [
    "Dr. B.C. Roy Award",
    "Dr. B.C. Roy Award",
    "Dr. B.C. Roy Award",
    "Dr. B.C. Roy Award",
  ],
  clinicAddress:
    "Sanjeevani Surgical Care, 3rd Floor, Orchid Plaza, Tonk Road, Jaipur – 302018",
  topTreatments: [
    {
      title: "Piles Surgery",
      description:
        "Involves the surgical repair of a defect or weakness in the abdominal wall through open or laparoscopic techniques.",
      icon: "/piles.png",
    },
    {
      title: "Kidney Stone Removal",
      description:
        "Involves the surgical repair of a defect or weakness in the abdominal wall through open or laparoscopic techniques.",
      icon: "/peni.png",
    },
    {
      title: "Fistula Treatment",
      description:
        "Involves the surgical repair of a defect or weakness in the abdominal wall through open or laparoscopic techniques.",
      icon: "/fistula.png",
    },
  ],
};

const DoctorProfile = ({ doctor = fallbackDoctor }) => {
  const [activeTab, setActiveTab] = useState("about");
  const scrollRef = useRef(null);

  const tabs = [
    { id: "about", label: "About Doctor" },
    { id: "reviews", label: "Reviews" },
    { id: "videos", label: "Videos" },
  ];

  const reviews = Array.from({ length: 10 }, () => ({
    name: "Sheila Bennett",
    city: "Mumbai",
    content:
      "We've partnered with India's leading hospitals to ensure you receive the highest standard of treatment, wherever you are.",
  }));

  const scrollByCard = (direction) => {
    const container = scrollRef.current;
    const cardWidth = 220;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      if (container.scrollLeft + cardWidth >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft - cardWidth <= 0) {
        container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex-col">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <DoctorHeaderCard doctor={doctor} />

          {/* Awards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {doctor.awards.map((award, index) => (
              <div
                key={index}
                className="bg-white border border-[#D2D2D2] rounded-md p-3 text-sm text-center"
              >
                <div className="flex justify-between items-center">
                  <img src="/award.png" alt="award" />
                  <p className="text-500">{award}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mt-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border rounded-full px-6 py-1 text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#8F6CB4] text-white border-[#8F6CB4]"
                    : "text-black text-[500] border-[#8F6CB4] hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="bg-white rounded-xl p-0 mt-4 space-y-4">
            {activeTab === "about" && (
              <>
                <h2 className="text-[20px] font-semibold">About Doctor</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </>
            )}

            {activeTab === "reviews" && (
              <>
                <h2 className="text-[20px] font-semibold mb-2">Reviews</h2>
                <div className="relative max-w-[800px] no-scrollbar">
                  <div
                    ref={scrollRef}
                    className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth px-1"
                  >
                    {reviews.map((review, index) => (
                      <div
                        key={index}
                        className="min-w-[200px] max-w-[200px] bg-gray-50 rounded-md p-4 text-sm flex-shrink-0 shadow-sm"
                      >
                        <p className="text-gray-700 text-[13px] mb-3 leading-snug">
                          {review.content}
                        </p>
                        <div className="flex items-center gap-2 mt-auto">
                          <div className="w-8 h-8 bg-gray-300 rounded-full" />
                          <div>
                            <p className="font-semibold text-sm">{review.name}</p>
                            <p className="text-xs text-gray-500">{review.city}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollByCard("right")}
                    className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 p-1.5 bg-white border border-[#8F6CB4] rounded-full shadow"
                  >
                    <ChevronRight size={20} className="text-[#8F6CB4]" />
                  </button>
                </div>
              </>
            )}

            {activeTab === "videos" && (
              <>
                <h2 className="text-[20px] font-semibold mb-2">Videos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-200 h-[180px] rounded-md flex items-center justify-center text-sm">
                    Video Placeholder 1
                  </div>
                  <div className="bg-gray-200 h-[180px] rounded-md flex items-center justify-center text-sm">
                    Video Placeholder 2
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Clinic Location */}
          <div className="rounded-3xl w-[600px] mt-4 bg-white">
            <h3 className="text-[20px] font-semibold mb-2">Clinic Location</h3>
            <span className="inline-block bg-[#8F6CB4] mt-3 w-[119px] text-white h-[31px] text-xs px-3 py-2 text-center rounded-full mb-3">
              {doctor.city}
            </span>
            <div className="border flex  p-4 rounded-md">
              <div className="w-[106px] h-[96px] bg-[#D9D9D9] rounded-[10px]"></div>
              <div className="ml-4">
                <p className="font-medium text-sm mt-1">Address</p>
                <p className="text-sm mt-3 w-[60%]">{doctor.clinicAddress}</p>
              </div>
              <img src="location.png" className="h-[25px] w-[20px]" />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-[400px]">
          <ConsultationForm doctorName={doctor.name} />
        </div>
      </div>

      {/* Treatments */}
      <div className="mt-10 mb-7">
        <h2 className="text-[40px] font-semibold text-center">Top Treatments</h2>
        <p className="text-[#8F6CB4] text-md text-center">by {doctor.name}</p>
        <div className="flex space-x-10 justify-center ml-11 mr-11 mt-6">
          {doctor.topTreatments.map((treatment, index) => (
            <div
              key={index}
              className="w-[270px] h-[240px] bg-[#EDEDED] rounded-tr-full rounded-tl-full rounded-br-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-[#8F6CB4] group cursor-pointer"
            >
              <img
                src={treatment.icon}
                alt={treatment.title}
                className="w-[80px] h-[80px] mb-3 transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
              />
              <p className="text-sm font-semibold group-hover:text-white">
                {treatment.title}
              </p>
              {treatment.description && (
                <p className="text-xs mt-2 px-4 text-gray-500 group-hover:text-white hidden group-hover:block">
                  {treatment.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="border w-[296px] mt-4 h-[41px] border-[#8F6CB4] text-[#8F6CB4] px-4 py-1 rounded-full text-sm hover:bg-[#8F6CB4] hover:text-white transition">
            View All
          </button>
        </div>
      </div>

      {/* Action Cards */}
      <div className="-mb-10 mt-40 flex justify-center gap-6 z-10">
        {["Contact Doctor", "Book Appointment", "Visit"].map((action, i) => (
          <div
            key={i}
            className="w-[328px] h-[200px] bg-white border rounded-[18px] flex flex-col justify-center items-center shadow-md"
          >
            <img src={`/${action.toLowerCase().replace(" ", "")}.png`} className="w-[82px] h-[82px]" />
            <button className="text-sm w-[192px] h-[40px] text-[#8F6CB4] border border-[#8F6CB4] rounded-[23px] mt-3">
              {action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorProfile;
