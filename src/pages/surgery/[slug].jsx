import AppointmentForm from '../../components/ui/AppointmentForm';
import DoctorsSection from '../../components/DoctorsSection';
import SurgeryBenefits from '@/components/SurgeryBenefits';
import FAQSection from '@/components/ui/FAQ';
import { surgeryData } from '@/components/data/surgeryData';
import {faqData} from '@/components/data/faqData'; // Assuming you have a separate file for FAQs

export default function SurgeryPage({ surgery }) {
  const topCities = ["Jaipur", "Mumbai", "Bangalore", "Delhi"];
  

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
            <h1 className="text-3xl font-semibold mb-4">{surgery.title}</h1>
            <p className="text-gray-600 mb-6 max-w-lg">{surgery.description}</p>
            <a
              href={`tel:${surgery.phone}`}
              className="inline-block bg-[#8F6CB4] text-white py-2 px-5 rounded-full text-sm font-medium"
            >
              Call us: {surgery.phone}
            </a>
          </div>

          {/* Right Appointment Form Card */}
          <AppointmentForm topCities={topCities} />
        </div>
      </section>

      {/* Benefit Cards Section */}
      <section className="bg-white py-10 px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {surgery.benefits.map((card, index) => (
          <div
            key={index}
            className={`flex items-center mr-1 justify-center h-[60px] w-[230px] rounded-md text-white font-semibold text-sm ${card.color}`}
          >
            <img src={card.img} alt={card.text} className="h-6 mr-3" />
            {card.text}
          </div>
        ))}
      </section>

     <DoctorsSection surgeryKey={surgery.key} surgeryName={surgery.title} />


      <SurgeryBenefits benefits={surgery.benefitsList}/>
<FAQSection
        title={`FAQs Around ${surgery.title} Treatment`}
        faqs={faqData[surgery.key] || []}
      />
    </div>
  );
}

// ✅ Generate all paths
export async function getStaticPaths() {
  const paths = surgeryData.map((s) => ({
    params: { slug: s.slug },
  }));

  return { paths, fallback: false };
}

// ✅ Fetch data for each surgery
export async function getStaticProps({ params }) {
  const surgery = surgeryData.find((s) => s.slug === params.slug);

  return {
    props: {
      surgery,
    },
  };
}
