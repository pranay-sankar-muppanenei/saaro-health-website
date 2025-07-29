'use client';

import { useRouter } from 'next/navigation';
import { doctorDummyData } from '../components/data/doctorDummyData';
import { FaStar, FaMapMarkerAlt, FaUserMd, FaSearch } from 'react-icons/fa';
import AppointmentForm from '../components/ui/AppointmentForm';
import { useState } from 'react';
import Link from 'next/link';

const DoctorsSection = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Jaipur');

  const cityTabs = ['Jaipur', 'Mumbai', 'Bangalore', 'Delhi'];

  const isExploreOtherCities = selectedCity === 'Explore other cities';

  const filteredDoctors = doctorDummyData.filter((doc) => {
    const nameMatch = doc.name.toLowerCase().includes(search.toLowerCase());

    const cityMatch = isExploreOtherCities
      ? !cityTabs.includes(doc.city)
      : doc.city === selectedCity;

    return nameMatch && cityMatch;
  });

  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Best Doctors For Piles Treatment
          </h2>

          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Doctors for piles treatment in Jaipur"
              className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaSearch className="absolute right-4 top-3 text-purple-500 text-sm" />
          </div>

          {/* City Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[...cityTabs, 'Explore other cities'].map((city, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-1.5 rounded-full border ${
                  selectedCity === city
                    ? 'bg-purple-100 border-purple-500 text-purple-700'
                    : 'text-gray-600 border-gray-300'
                } text-sm`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Doctor List */}
          <div className="space-y-6 max-h-[700px] overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-gray-300">
            {filteredDoctors.length === 0 ? (
              <div className="text-center text-gray-500 font-medium py-10">
                No doctors found
              </div>
            ) : (
              filteredDoctors.map((doctor) => (
                <Link key={doctor.id} href={`/doctor/${doctor.id}`}>

                <div
                  key={doctor.id}
                  className="bg-white rounded-xl shadow-md hover:scale-101 p-4 flex flex-col justiy-center md:flex-row gap-4"
                >
                  {/* Image + Price */}
                  <div className="flex flex-col items-center md:w-[120px]">
                    <div className="w-[113px] h-[119px] bg-[#D9D9D9] rounded-lg" />
                    <div className="mt-2 text-[10px] text-green-600 font-semibold">
                      <span className="line-through text-gray-500 mr-1">₹1000</span>
                      (Free Today)
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-2">
                    {/* Name + Qualification */}
                    <div className="flex justify-between items-start">
                      <h3 className="text-[14px] font-dm font-semibold text-gray-900">{doctor.name}</h3>
                      <span className="bg-[#E4D4F6] text-[#791BC7] text-center font-bold text-[10px] px-1 py-1 rounded-full">
                        {doctor.qualification}
                      </span>
                    </div>

                    {/* Specialty */}
                    <p className="text-[10px] text-[#A0A0A0]">
                      Specialist in Hernia & Laparoscopic Surgeries
                    </p>
                    <hr className="text-[#D0D0D0]" />

                    {/* Address */}
                    <p className="text-[12px] text-[#949494] flex items-center gap-1">
                      <FaMapMarkerAlt className="text-red-500" />
                      {doctor.clinicAddress}
                    </p>

                    {/* Experience + Rating */}
                    <div className="flex gap-6 text-sm text-gray-700">
                      <div className="flex items-center gap-1">
                        <FaUserMd className="text-yellow-600" />
                        {doctor.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        {doctor.rating} ({doctor.reviews} reviews)
                      </div>
                    </div>

                    {/* Insurance */}
                    <p className="text-sm font-medium mt-1">Insurance we offer</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-[60px] h-[30px] bg-gray-200 rounded-md" />
                      <div className="w-[60px] h-[30px] bg-gray-200 rounded-md" />
                      <div className="w-[60px] h-[30px] bg-gray-200 rounded-md" />
                    </div>
                  </div>

                  {/* Right Side - Dates */}
                  <div className="flex flex-col justify-between gap-4 w-full md:w-[260px]">
                    <div className="grid grid-cols-2 gap-2">
                      {doctor.availableDates.map((date, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(date)}
                          className={`text-sm px-2 py-2 rounded-md border text-center ${
                            selectedDate === date
                              ? 'bg-[#8F6CB4] text-white'
                              : 'border-gray-300 text-gray-700'
                          }`}
                        >
                          <div className="text-[12px] font-medium">{date}</div>
                          <div className="text-[8px]">Available</div>
                        </button>
                      ))}
                    </div>
                    <button className="mt-2 w-[200px] self-end bg-[#8F6CB4] text-white text-sm py-2 rounded-full hover:scale-102 transition">
                      Book a free appointment
                    </button>
                  </div>
                </div>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Appointment Form */}
        <div className="w-full lg:w-[360px]">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default DoctorsSection;
