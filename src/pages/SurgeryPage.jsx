import React from 'react';
import AppointmentForm from '../components/ui/AppointmentForm';
import DoctorsSection from '../components/DoctorsSection'; // Assuming path
import SurgeryBenefits from '@/components/SurgeryBenefits';
import FAQSection from '@/components/ui/FAQ';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

  const topCities = ["Jaipur", "Mumbai", "Bangalore", "Delhi"];

const benefitCards = [
  {
    color: 'bg-yellow-400',
    text: 'Free Consultation',
    img:'/freeconsult.png',
  },
  {
    color: 'bg-green-500',
    text: 'Zero cost EMI',
    img:'/zerocostemi.png',
  },
  {
    color: 'bg-blue-600',
    text: 'USFDA approved procedure',
    img:'/USFDA.png',
  },
  {
    color: 'bg-red-400',
    text: 'Support in Insurance claim',
    img:'/insuranceclaim.png',
  },
  {
    color: 'bg-pink-400',
    text: 'Free cab facility',
    img:'/freecab.png',
  },
];

export default function SurgeryPage() {
  return (
    <div>
 
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f9f4ff] to-white pt-10 pb-16 px-4 md:px-20">
        {/* Breadcrumb and Controls */}
        <div className="text-sm text-gray-500 mb-6">
          <div className="flex gap-4 mt-1">
            <span className="cursor-pointer">FILTERS ▼</span>
            <span className="cursor-pointer">SORT BY ▼</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col items-center lg:flex-row justify-between gap-12">
          {/* Left Text Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-4">
              Piles Treatment – Laser Surgery Procedure & Operation Benefits
            </h1>
            <p className="text-gray-600 mb-6 max-w-lg">
              One of the most common anorectal medical conditions, yet least talked about is piles.
              Piles, or hemorrhoids, are swollen tissues and blood vessels found inside the skin in
              the rectal region. You can get the best treatment for piles at Pristyn Care, with
              top–notch medical technologies and equipment. Book a consultation today with Pristyn
              Care to get rid of piles.
            </p>
            <a
              href="tel:918086478089"
              className="inline-block bg-[#8F6CB4] text-white py-2 px-5 rounded-full text-sm font-medium"
            >
              Call us: +91 87086478089
            </a>
          </div>

          {/* Right Appointment Form Card */}
             <AppointmentForm topCities={topCities}/>
          
        </div>
      </section>

      {/* Benefit Cards Section */}
      <section className="bg-white py-10 px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {benefitCards.map((card, index) => (
          <div
            key={index}
            className={`flex items-center justify-center h-[60px] w-[200px] rounded-md text-white font-semibold text-sm ${card.color}`}
          >
            <div>
            <img src={card.img} alt={card.text} className="h-6 mr-2" />
            </div>
            <div>
            {card.text}
            </div>
          </div>
        ))}
      </section>
      {/* Doctors Section */}
      <DoctorsSection />
      <SurgeryBenefits/>
      <FAQSection/>

    </div>
  );
}
